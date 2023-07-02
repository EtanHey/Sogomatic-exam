"use client";
import React, { useEffect } from "react";

import { restrictToWindowEdges, createSnapModifier } from "@dnd-kit/modifiers";

import {
  initiateInputsStore,
  moveNewInput,
  selectFormCreatorInputStore,
  selectFormCreatorNewForm,
} from "@/features/formCreator/formCreatorSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";

import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import DraggableInput from "@/components/DnD/draggableParts/DraggableInput";
import DroppableForm from "@/components/DnD/DroppableForm";
import { Input } from "@prisma/client";
const DnDArea = ({ inputs }: { inputs: Array<Input> }) => {
  const inputStore = useAppSelector(selectFormCreatorInputStore);
  const newForm = useAppSelector(selectFormCreatorNewForm);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initiateInputsStore(inputs));
  }, []);
  function handleDragMove(ev: DragMoveEvent) {}
  function handleDragEnd(ev: DragEndEvent) {
    dispatch(moveNewInput({ activeId: ev.active.id, delta: ev.delta }));
  }

  const sensors = useSensors(
    useSensor(KeyboardSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor)
  );
  const snapToGrid = createSnapModifier(35);
  return (
    <DndContext
      modifiers={[restrictToWindowEdges, snapToGrid]}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
      sensors={sensors}
    >
      {/* draggable inputs container */}
      <div className=" flex h-0 min-h-full w-64 min-w-[16rem] flex-col justify-center gap-x-20 gap-y-14 overflow-y-clip bg-gray-500">
        {inputStore.map((currentInput) => (
          <DraggableInput
            {...currentInput}
            key={currentInput.id}
            styles={{
              position: "absolute",
              left: `${currentInput.position.x}px`,
              top: `${currentInput.position.y}px`,
            }}
            input={currentInput}
          />
        ))}
        {newForm.inputs.map((currentInput) => (
          <DraggableInput
            {...currentInput}
            key={currentInput.id}
            styles={{
              position: "absolute",
              left: `${currentInput.position.x}px`,
              top: `${currentInput.position.y}px`,
            }}
            input={currentInput}
          />
        ))}
      </div>
      {/* droppable form container */}
      <div className="h-min overflow-y-clip">
        {/* droppable form */}
        <DroppableForm />
      </div>
    </DndContext>
  );
};

export default DnDArea;
