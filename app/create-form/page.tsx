"use client";
import DroppableForm from "@/components/DroppableForm";
import InputSideBar from "@/components/InputSideBar";
import {
  DraggableDateInput,
  DraggableDateTimeInput,
  DraggableEmailInput,
  DraggableTelIL,
  DraggableTextInput,
  DraggableTimeInput,
} from "@/components/draggableInputs";
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
  function handleDragEnd(ev: DragEndEvent) {
    //Get the id of the active draggable
    const activeId = ev.active.id;
    console.log(activeId);

    //Update the state
    setDraggables((draggables) => {
      return draggables.map((draggable) => {
        //if draggable id matches the active id
        if (draggable.id === activeId) {
          return {
            ...draggable,
            //update its position with the new position in the delta object in
            //the drag end event
            position: {
              x: (draggable.position.x += ev.delta.x),
              y: (draggable.position.y += ev.delta.y),
            },
          };
        }
        //return draggable that is not active
        return draggable;
      });
    });
  }

  const sensors = useSensors(
    useSensor(KeyboardSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor)
  );

  const draggable = [
    {
      id: "1",
      name: "TelIl",
      position: { x: 30, y: 30 },
    },
    {
      id: "2",
      name: "Email",
      position: { x: 30, y: 70 },
    },
    {
      id: "3",
      name: "Text",
      position: { x: 30, y: 110 },
    },
    {
      id: "4",
      name: "Time",
      position: { x: 30, y: 150 },
    },
    {
      id: "5",
      name: "DateTime",
      position: { x: 30, y: 190 },
    },
    {
      id: "6",
      name: "Date",
      position: { x: 30, y: 230 },
    },
  ];

  const [draggables, setDraggables] = useState([...draggable]);

  return (
    <div className="flex h-full max-w-full flex-row place-items-center text-textColor">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        {/* draggable inputs container */}
        <div className="flex h-0 min-h-full w-64 flex-col justify-center gap-x-20 gap-y-14 overflow-y-auto bg-gray-500">
          {draggables.map(
            (draggable) =>
              draggable.name === "Time" && (
                <DraggableTimeInput
                  {...draggable}
                  draggable={draggable}
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
          )}
        </div>
        {/* droppable form container */}
        <div className="min-h-min overflow-y-auto">
          {/* droppable form */}
          <DroppableForm />
        </div>
      </DndContext>
    </div>
  );
};

export default page;
