import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import StripeApp from "../StripeApp";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/StripeApp">
                <StripeApp/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews