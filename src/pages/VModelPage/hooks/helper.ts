import {computed} from "vue";

export function getReactiveInput(props, value) {
    return computed({
        get: () => props.title + 'a',
        set: (value) => {
            ctx.emit(`update:modelValue`, value);
        },
    });

}
/*

import { computed, SetupContext, WritableComputedRef } from 'vue';

export const vModel = <T>(props: any, context: SetupContext, binding = 'modelValue'): WritableComputedRef<T> =>
    computed({
        get: () => props.modelValue,
        set: (value) => {
            context.emit(`update:${binding}`, value);
        },
    });
*/