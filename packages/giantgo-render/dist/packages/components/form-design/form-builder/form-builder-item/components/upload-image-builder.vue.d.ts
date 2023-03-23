import type { Message } from 'element-plus';
import type { SFCInstallWithContext } from 'element-plus/es/utils';
import type { Ref } from '@vue/reactivity';
export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const path: StringConstructor;
        const uuid: StringConstructor;
        namespace options {
            export const type: ObjectConstructor;
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        dialogImageUrl: Ref<string>;
        dialogVisible: Ref<boolean>;
        handlePreview: (uploadFile: any) => void;
        beforeRemove: () => boolean;
        ref: typeof ref;
        ElMessage: SFCInstallWithContext<Message>;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        dialogImageUrl: Ref<string>;
        dialogVisible: Ref<boolean>;
        handlePreview: (uploadFile: any) => void;
        beforeRemove: () => boolean;
        ref: typeof ref;
        ElMessage: SFCInstallWithContext<Message>;
    };
}
import { ref } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
