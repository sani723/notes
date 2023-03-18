/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NodeCreateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type NodeCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NodeCreateFormOverridesProps = {
    NodeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NodeCreateFormProps = React.PropsWithChildren<{
    overrides?: NodeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NodeCreateFormInputValues) => NodeCreateFormInputValues;
    onSuccess?: (fields: NodeCreateFormInputValues) => void;
    onError?: (fields: NodeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NodeCreateFormInputValues) => NodeCreateFormInputValues;
    onValidate?: NodeCreateFormValidationValues;
} & React.CSSProperties>;
export default function NodeCreateForm(props: NodeCreateFormProps): React.ReactElement;
