export type DraggableInput = {
  id: string;
  name: string;
  position: {
    x: number;
    y: number;
  };
};

export enum FormCreatorStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed'
}