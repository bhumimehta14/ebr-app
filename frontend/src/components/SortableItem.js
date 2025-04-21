import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function SortableItem({ id, value, index, onChange, onDuplicate }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px'
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <span style={{ cursor: 'grab' }}>☰</span>
      <input
        type="text"
        style={{ flex: 1, padding: '8px' }}
        placeholder={`Step ${index + 1}`}
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
      />
      <button onClick={() => onDuplicate(index)}>📄</button>
    </div>
  );
}