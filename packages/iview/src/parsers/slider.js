import {creatorTypeFactory} from '@form-create/core';

const name = 'slider';
export default {
    name,
    maker: {
        sliderRange: creatorTypeFactory(name, true, 'range')
    },
    toFormValue(value, ctx) {
        let isArr = Array.isArray(value), props = ctx.prop.props, min = props.min || 0,
            parseValue;
        if (props.range === true) {
            parseValue = isArr ? value : [min, (parseFloat(value) || min)];
        } else {
            parseValue = isArr ? (parseFloat(value[0]) || min) : parseFloat(value);
        }
        return parseValue;
    }

}
