"use client";
import DroppableForm from "@/components/DroppableForm";

import {
  DraggableDateInput,
  DraggableDateTimeInput,
  DraggableEmailInput,
  DraggableTextInput,
  DraggableTimeInput,
  DraggableTelILInput,
} from "@/components/draggableInputs";
import { selectFormCreatorInputStore } from "@/features/formCreator/formCreatorSlice";
import { useAppSelector } from "@/state/hooks";

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import React, { useState } from "react";

const page = () => {
  const inputStore = useAppSelector(selectFormCreatorInputStore);
  function handleDragEnd(ev: DragEndEvent) {
    //Get the id of the active draggable
    const activeId = ev.active.id;
    //Update the state
    // setDraggables((draggables) => {
    //   return draggables.map((draggable) => {
    //     //if draggable id matches the active id
    //     if (draggable.id === activeId) {
    //       return {
    //         ...draggable,
    //         //update its position with the new position in the delta object in
    //         //the drag end event
    //         position: {
    //           x: (draggable.position.x += ev.delta.x),
    //           y: (draggable.position.y += ev.delta.y),
    //         },
    //       };
    //     }
    //     //return draggable that is not active
    //     return draggable;
    //   });
    // });
  }

  const sensors = useSensors(
    useSensor(KeyboardSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor)
  );

  return (
    <div className="flex h-full w-screen flex-row place-items-center text-textColor">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        {/* draggable inputs container */}
        <div className="flex h-0 min-h-full w-64 min-w-[16rem] flex-col justify-center gap-x-20 gap-y-14 overflow-y-auto bg-gray-500">
          {inputStore.map((draggable) =>
            draggable.name === "TelIl" ? (
              <DraggableTelILInput
                {...draggable}
                id={draggable.id}
                key={draggable.id}
                //Pass current position as css styles, makes sure we can drag element
                //across the viewport
                styles={{
                  position: "absolute",
                  left: `${draggable.position.x}px`,
                  top: `${draggable.position.y}px`,
                }}
              />
            ) : draggable.name === "Email" ? (
              <DraggableEmailInput
                {...draggable}
                id={draggable.id}
                key={draggable.id}
                //Pass current position as css styles, makes sure we can drag element
                //across the viewport
                styles={{
                  position: "absolute",
                  left: `${draggable.position.x}px`,
                  top: `${draggable.position.y}px`,
                }}
              />
            ) : draggable.name === "Time" ? (
              <DraggableTimeInput
                {...draggable}
                key={draggable.id}
                //Pass current position as css styles, makes sure we can drag element
                //across the viewport
                styles={{
                  position: "absolute",
                  left: `${draggable.position.x}px`,
                  top: `${draggable.position.y}px`,
                }}
              />
            ) : draggable.name === "Text" ? (
              <DraggableTextInput
                {...draggable}
                key={draggable.id}
                //Pass current position as css styles, makes sure we can drag element
                //across the viewport
                styles={{
                  position: "absolute",
                  left: `${draggable.position.x}px`,
                  top: `${draggable.position.y}px`,
                }}
              />
            ) : draggable.name === "DateTime" ? (
              <DraggableDateTimeInput
                {...draggable}
                key={draggable.id}
                //Pass current position as css styles, makes sure we can drag element
                //across the viewport
                styles={{
                  position: "absolute",
                  left: `${draggable.position.x}px`,
                  top: `${draggable.position.y}px`,
                }}
              />
            ) : (
              draggable.name === "Date" && (
                <DraggableDateInput
                  {...draggable}
                  key={draggable.id}
                  //Pass current position as css styles, makes sure we can drag element
                  //across the viewport
                  styles={{
                    position: "absolute",
                    left: `${draggable.position.x}px`,
                    top: `${draggable.position.y}px`,
                  }}
                />
              )
            )
          )}
        </div>
        {/* droppable form container */}
        <div className="h-min overflow-y-auto">
          {/* droppable form */}
          <DroppableForm />
        </div>
      </DndContext>
    </div>
  );
};

export default page;
