import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Node, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Node, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Node = LazyLoading extends LazyLoadingDisabled ? EagerNode : LazyNode

export declare const Node: (new (init: ModelInit<Node>) => Node) & {
  copyOf(source: Node, mutator: (draft: MutableModel<Node>) => MutableModel<Node> | void): Node;
}