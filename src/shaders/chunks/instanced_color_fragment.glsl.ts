export default /* glsl */`
#ifdef USE_INSTANCING_COLOR_ALPHA_INDIRECT
  diffuseColor *= vColor;
#elif defined( USE_INSTANCING_COLOR_INDIRECT )
  diffuseColor.rgb *= vColor;
#endif
`;