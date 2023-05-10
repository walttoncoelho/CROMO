export default SwitchButtonComponent
import { SwitchLabelComponent, InputComponent, SliderComponent} from "./style/Switch"
import './style/Switch.css'

function SwitchButtonComponent() {
    return (
        <>
        <SwitchLabelComponent className="label">
            <InputComponent className='inputComponent' type='checkbox'></InputComponent>
            <SliderComponent className='sliderComponent'></SliderComponent>
        </SwitchLabelComponent>
        </>
    )
}