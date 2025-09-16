'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaRegCommentDots } from 'react-icons/fa';

/**
 * CPPN shader graded to a rich purple with a diagonal “beam”.
 * We reuse the same background and swap the foreground content
 * for your Contact + Let’s-Talk card section.
 */

// ===================== SHADER =====================
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Purple-graded CPPN with diagonal beam + vignette
const fragmentShader = `
  #ifdef GL_ES
    precision lowp float;
  #endif

  uniform float iTime;
  uniform vec2  iResolution;
  uniform vec3  uTint;
  varying vec2  vUv;

  vec4 buf[8];
  vec4 sigmoid(vec4 x){ return 1.0/(1.0+exp(-x)); }

  vec4 cppn_fn(vec2 coordinate, float in0, float in1, float in2){
    buf[6] = vec4(coordinate.x, coordinate.y, 0.3948333106 + in0, 0.36 + in1);
    buf[7] = vec4(0.14 + in2, length(coordinate), 0., 0.);

    buf[0] = mat4(vec4(6.5404263,-3.6126034,0.7590882,-1.13613),
                  vec4(2.4582713,3.1660357,1.2219609,0.06276096),
                  vec4(-5.478085,-6.159632,1.8701609,-4.7742867),
                  vec4(6.039214,-5.542865,-0.90925294,3.251348))
            * buf[6]
            + mat4(vec4(0.8473259,-5.722911,3.975766,1.6522468),
                   vec4(-0.24321538,0.5839259,-1.7661959,-5.350116),
                   vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.)) * buf[7]
            + vec4(0.21808943,1.1243913,-1.7969975,5.0294676);

    buf[1] = mat4(vec4(-3.3522482,-6.0612736,0.55641043,-4.4719114),
                  vec4(0.8631464,1.7432913,5.643898,1.6106541),
                  vec4(2.4941394,-3.5012043,1.7184316,6.357333),
                  vec4(3.310376,8.209261,1.1355612,-1.165539))
            * buf[6]
            + mat4(vec4(5.24046,-13.034365,0.009859298,15.870829),
                   vec4(2.987511,3.129433,-0.89023495,-1.6822904),
                   vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.)) * buf[7]
            + vec4(-5.9457836,-6.573602,-0.8812491,1.5436668);

    buf[0] = sigmoid(buf[0]);
    buf[1] = sigmoid(buf[1]);

    buf[2] = mat4(vec4(-15.219568,8.095543,-2.429353,-1.9381982),
                  vec4(-5.951362,4.3115187,2.6393783,1.274315),
                  vec4(-7.3145227,6.7297835,5.2473326,5.9411426),
                  vec4(5.0796127,8.979051,-1.7278991,-1.158976))
            * buf[6]
            + mat4(vec4(-11.967154,-11.608155,6.1486754,11.237008),
                   vec4(2.124141,-6.263192,-1.7050359,-0.7021966),
                   vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.)) * buf[7]
            + vec4(-4.17164,-3.2281182,-4.576417,-3.6401186);

    buf[3] = mat4(vec4(3.1832156,-13.738922,1.879223,3.233465),
                  vec4(0.64300746,12.768129,1.9141049,0.50990224),
                  vec4(-0.049295485,4.4807224,1.4733979,1.801449),
                  vec4(5.0039253,13.000481,3.3991797,-4.5561905))
            * buf[6]
            + mat4(vec4(-0.1285731,7.720628,-3.1425676,4.742367),
                   vec4(0.6393625,3.714393,-0.8108378,-0.39174938),
                   vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.)) * buf[7]
            + vec4(-1.1811101,-21.621881,0.7851888,1.2329718);

    buf[2] = sigmoid(buf[2]);
    buf[3] = sigmoid(buf[3]);

    vec3 col = vec3(buf[0].x, buf[1].y, buf[2].z);

    vec2 uv = vUv * 2.0 - 1.0; uv.y *= -1.0;
    float beam = smoothstep(-0.8, 0.3, uv.x + uv.y*0.6);
    beam *= smoothstep(1.0, 0.0, length(uv*vec2(0.7,1.1)));
    float vig = smoothstep(1.2, 0.2, length(uv*0.9));

    vec3 tint = normalize(uTint);
    col = mix(col, tint, 0.65);
    col *= (0.55 + 0.75*beam);
    col *= (0.75 + 0.25*vig);
    col = pow(col, vec3(1.0/1.6));

    gl_FragColor = vec4(col, 1.0);
  }
`;

const CPPNShaderMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector2(1, 1), uTint: new THREE.Color(0.62, 0.25, 1.0) },
  vertexShader,
  fragmentShader
);
extend({ CPPNShaderMaterial });

function ShaderPlane() {
  const materialRef = useRef<any>(null);
  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.iTime = state.clock.elapsedTime;
    const { width, height } = state.size;
    materialRef.current.iResolution.set(width, height);
  });
  return (
    <mesh position={[0.15, -0.75, -0.6]} rotation={[0, 0, -0.06]}>
      <planeGeometry args={[4.8, 4.6]} />
      <cPPNShaderMaterial ref={materialRef} side={THREE.DoubleSide} />
    </mesh>
  );
}

function ShaderBackground() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const camera = useMemo(
    () => ({ position: [0, 0, 1] as [number, number, number], fov: 75, near: 0.1, far: 1000 }),
    []
  );

  useGSAP(() => {
    if (!wrapRef.current) return;
    gsap.set(wrapRef.current, { filter: 'blur(24px)', scale: 1.08, autoAlpha: 0.7 });
    gsap.to(wrapRef.current, {
      filter: 'blur(0px)',
      scale: 1,
      autoAlpha: 1,
      duration: 1.6,
      ease: 'power3.out',
      delay: 0.25,
    });
  }, { scope: wrapRef });

  return (
    <div ref={wrapRef} className="bg-black absolute inset-0 -z-10 w-full h-full" aria-hidden>
      <Canvas camera={camera} gl={{ antialias: true, alpha: false }} dpr={[1, 2]} style={{ width: '100%', height: '100%' }}>
        <ShaderPlane />
      </Canvas>
      {/* bloom & vignette layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_35%_10%,rgba(140,70,255,0.55),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_0%,rgba(100,50,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.35),transparent_55%)]" />
      </div>
    </div>
  );
}

// ===================== HERO WITH CONTACT CONTENT =====================
export default function NeuralNetworkHeroContact() {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden text-white">
      <ShaderBackground />

      {/* Content container: responsive and centered */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-20 py-24 lg:py-28 flex flex-col lg:flex-row items-start gap-12">
        {/* Contact Info Panel */}
        <div className="flex-1 space-y-10 order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-light">Contact us</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="uppercase text-gray-300/80 text-xs mb-2">Email Address</h4>
              <p className="text-lg break-words">vinitchaudhary080@gmail.com</p>
            </div>
            <div>
              <h4 className="uppercase text-gray-300/80 text-xs mb-2">Phone</h4>
              <p className="text-lg">+91-8398020076</p>
            </div>
          </div>

          <div>
            <h4 className="uppercase text-gray-300/80 text-xs mb-2">Address</h4>
            <address className="not-italic text-lg space-y-1 leading-relaxed">
              <div>Gurugram</div>
              <div>Haryana 122103</div>
              <div>India</div>
            </address>
          </div>
        </div>

        {/* Let’s-Talk Card */}
        <div
          className="
            w-full lg:w-1/2
            bg-black/40 backdrop-blur-sm
            rounded-xl px-6 sm:px-8 py-10 sm:py-12
            min-h-[300px]
            space-y-6 text-center
            order-1 lg:order-2
            border border-white/10
            shadow-[0_0_120px_-40px_rgba(145,100,255,0.5)]
          "
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light leading-snug">
            “Every project starts with a conversation.”
          </h2>

          <p className="text-sm text-gray-200/80 italic max-w-prose mx-auto">
            Have a brief? I’ll map scope, risks, and a first sprint plan in 48 hours.
          </p>

         <a
  href="https://wa.me/918398020076"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center gap-2
    rounded-2xl border border-white/10
    px-5 py-3 text-sm font-light tracking-tight
    text-white backdrop-blur-sm
    bg-white/10 hover:bg-white/20
    transition-colors duration-300
    focus:outline-none focus:ring-2 focus:ring-white/30
  "
>
  <FaRegCommentDots className="text-base opacity-90" />
  Let’s talk&nbsp;→
</a>

        </div>
      </div>

      {/* Bottom fade for depth on long pages */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
    </section>
  );
}

// Custom material typing for @react-three/fiber
declare module '@react-three/fiber' {
  interface ThreeElements {
    cPPNShaderMaterial: any;
  }
}
