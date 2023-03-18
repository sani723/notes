/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Node } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NodeUpdateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type NodeUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NodeUpdateFormOverridesProps = {
    NodeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NodeUpdateFormProps = React.PropsWithChildren<{
    overrides?: NodeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    node?: Node;
    onSubmit?: (fields: NodeUpdateFormInputValues) => NodeUpdateFormInputValues;
    onSuccess?: (fields: NodeUpdateFormInputValues) => void;
    onError?: (fields: NodeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NodeUpdateFormInputValues) => NodeUpdateFormInputValues;
    onValidate?: NodeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NodeUpdateForm(props: NodeUpdateFormProps): React.ReactElement;
