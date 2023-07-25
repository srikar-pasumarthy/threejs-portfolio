import { useGLTF, OrbitControls, Environment, Float, ContactShadows, Center } from '@react-three/drei'

export default function Experience()
{

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>
        {/** Set up the controls and background */}
        <color args={['#241a1a']} attach="background" />
        <OrbitControls maxAzimuthAngle={Math.PI/2} minAzimuthAngle={-Math.PI/2}/>
        <Environment preset="city" />

        {/** Add laptop to the scene and related elements */}

            <Float rotationIntensity={0.4} >
                <primitive
                    object={computer.scene}
                    position-y={-1.2}
                />
            </Float>
        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4}/>
    </>
}