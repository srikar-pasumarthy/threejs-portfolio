import { useGLTF, OrbitControls, Environment, Float, ContactShadows, Html, Text} from '@react-three/drei'
import { useThree } from '@react-three/fiber';

export default function Experience()
{

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    // <OrbitControls maxAzimuthAngle={Math.PI/2} minAzimuthAngle={-Math.PI/2} enablePan={false} maxPolarAngle={Math.PI/2}/>

    const {viewport} = useThree()
    const isMobile = viewport.width < 5;
    console.log(viewport.width)

    // Adjust positions based on the screen size
    const laptopPositionY = isMobile ? -1.2 : -1.4;
    const htmlScreenPositionY = isMobile ? 1.4 : 1.6;
    const htmlScreenPositionZ = isMobile ? -1.5 : -1.4;

    return <>
        {/** Set up the controls and background */}
        <color args={['#FFFFFF']} attach="background" />
        <OrbitControls />
        

        {/** Add laptop to the scene and related elements */}
        <Float rotationIntensity={0} >
            <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 100 }
                    color={ '#000030' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
            />
            <primitive object={computer.scene} position-y={laptopPositionY}>
                <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, htmlScreenPositionY, htmlScreenPositionZ ] }
                        rotation-x={ - 0.256 }
                    >
                    <iframe src="https://srikar-pasumarthy.github.io/water-reflection/dist/index.html" />
                </Html>
            </primitive>
        </Float>
            
        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4}/>
    </>
}