type SlMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-mutation': SlMutationEvent;
  }
}

export default SlMutationEvent;
