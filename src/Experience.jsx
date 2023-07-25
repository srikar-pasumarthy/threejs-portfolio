import { useGLTF, OrbitControls, Environment, Float, ContactShadows, Html, Text } from '@react-three/drei'

export default function Experience()
{

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>
        {/** Set up the controls and background */}
        <color args={['#241a1a']} attach="background" />
        <OrbitControls maxAzimuthAngle={Math.PI/2} minAzimuthAngle={-Math.PI/2} enablePan={false} maxPolarAngle={Math.PI/2}/>
        

        {/** Add laptop to the scene and related elements */}
        <Float rotationIntensity={0.4} >
            <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 100 }
                    color={ '#000030' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
            />
            <primitive object={computer.scene} position-y={ - 1.2 }>
                <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="https://srikar-pasumarthy.github.io/water-reflection/dist/index.html" />
                </Html>
            </primitive>
        </Float>
            
        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4}/>
    </>
}