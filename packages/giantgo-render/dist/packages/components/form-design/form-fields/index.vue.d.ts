export default _sfc_main;
declare namespace _sfc_main {
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        uuids: any;
        groups: any;
        register: any;
        clone: (original: any) => any;
        inject: typeof inject;
        draggable: import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").DefineComponent<{
            list: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            modelValue: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            itemKey: {
                type: (FunctionConstructor | StringConstructor)[];
                required: boolean;
            };
            clone: {
                type: FunctionConstructor;
                default: (original: any) => any;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            move: {
                type: FunctionConstructor;
                default: any;
            };
            componentData: {
                type: ObjectConstructor;
                required: boolean;
                default: any;
            };
        }, unknown, {
            error: boolean;
        }, {
            realList(): any;
            getKey(): any;
        }, {
            getUnderlyingVm(domElement: any): any;
            getUnderlyingPotencialDraggableComponent(htmElement: any): any;
            emitChanges(evt: any): void;
            alterList(onList: any): void;
            spliceList(): void;
            updatePosition(oldIndex: any, newIndex: any): void;
            getRelatedContextFromMoveEvent({ to, related }: {
                to: any;
                related: any;
            }): any;
            getVmIndexFromDomIndex(domIndex: any): any;
            onDragStart(evt: any): void;
            onDragAdd(evt: any): void;
            onDragRemove(evt: any): void;
            onDragUpdate(evt: any): void;
            computeFutureIndex(relatedContext: any, evt: any): any;
            onDragMove(evt: any, originalEvent: any): any;
            onDragEnd(): void;
        }, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, any[], any, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").VNodeProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").AllowedComponentProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentCustomProps, Readonly<{
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        } & {
            itemKey?: string | Function | undefined;
        }>, {
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        }>;
        cloneDeep: <T>(value: T) => T;
        makeId: typeof makeId;
        assists: import('../../../tokens').FormDesign[];
        complexs: import('../../../tokens').FormDesign[];
        inputs: import('../../../tokens').FormDesign[];
        layouts: import('../../../tokens').FormDesign[];
        matrixs: import('../../../tokens').FormDesign[];
        pickers: import('../../../tokens').FormDesign[];
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        uuids: any;
        groups: any;
        register: any;
        clone: (original: any) => any;
        inject: typeof inject;
        draggable: import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").DefineComponent<{
            list: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            modelValue: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            itemKey: {
                type: (FunctionConstructor | StringConstructor)[];
                required: boolean;
            };
            clone: {
                type: FunctionConstructor;
                default: (original: any) => any;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            move: {
                type: FunctionConstructor;
                default: any;
            };
            componentData: {
                type: ObjectConstructor;
                required: boolean;
                default: any;
            };
        }, unknown, {
            error: boolean;
        }, {
            realList(): any;
            getKey(): any;
        }, {
            getUnderlyingVm(domElement: any): any;
            getUnderlyingPotencialDraggableComponent(htmElement: any): any;
            emitChanges(evt: any): void;
            alterList(onList: any): void;
            spliceList(): void;
            updatePosition(oldIndex: any, newIndex: any): void;
            getRelatedContextFromMoveEvent({ to, related }: {
                to: any;
                related: any;
            }): any;
            getVmIndexFromDomIndex(domIndex: any): any;
            onDragStart(evt: any): void;
            onDragAdd(evt: any): void;
            onDragRemove(evt: any): void;
            onDragUpdate(evt: any): void;
            computeFutureIndex(relatedContext: any, evt: any): any;
            onDragMove(evt: any, originalEvent: any): any;
            onDragEnd(): void;
        }, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentOptionsMixin, any[], any, import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").VNodeProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").AllowedComponentProps & import(".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core").ComponentCustomProps, Readonly<{
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        } & {
            itemKey?: string | Function | undefined;
        }>, {
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        }>;
        cloneDeep: <T>(value: T) => T;
        makeId: typeof makeId;
        assists: import('../../../tokens').FormDesign[];
        complexs: import('../../../tokens').FormDesign[];
        inputs: import('../../../tokens').FormDesign[];
        layouts: import('../../../tokens').FormDesign[];
        matrixs: import('../../../tokens').FormDesign[];
        pickers: import('../../../tokens').FormDesign[];
    };
}
import { inject } from ".pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core";
import { uuid as makeId } from '../../../utils/uuid';
