import { SwitchLabel, Input, Slider, SpanArquivar} from "./style/Switch"

export default SwitchStatusButton
function SwitchStatusButton({ checked = false, callback = () => {} }) {
  function changeOpacity(event) {
    const checkbox = event.currentTarget.querySelector(".input");
    const label = event.currentTarget.querySelector(".arquivar");
    label.style.opacity = checked;
    callback(checkbox.checked);
  }
  return (
    <>
    <SwitchLabel className="label" onClick={changeOpacity}>
      <SpanArquivar className="arquivar">Arquivar</SpanArquivar>
      <Input className="input" type="checkbox" />
      <Slider className="slider" />
    </SwitchLabel>
    </>
  )
}


