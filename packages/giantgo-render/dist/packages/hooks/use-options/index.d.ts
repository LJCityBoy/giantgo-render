import type { FormDesign, Options } from '../../tokens';
export declare function useOptions(props: any, key: string, formDesign: FormDesign): {
    items: import("@vue/reactivity").Ref<{
        label: string;
        value: string;
    }[]>;
    requestItems: (options: Options) => void;
};