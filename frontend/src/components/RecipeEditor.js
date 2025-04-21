import React from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import SortableItem from './SortableItem';

export default function RecipeEditor({ recipe, updateStep, addStep, duplicateStep, handleDragEnd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipe.name}
        onChange={(e) => updateStep('name', e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '16px' }}
      />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={recipe.steps.map((_, index) => index.toString())}
          strategy={verticalListSortingStrategy}
        >
          {recipe.steps.map((step, index) => (
            <SortableItem
              key={index}
              id={index.toString()}
              index={index}
              value={step}
              onChange={(i, value) => updateStep('step', i, value)}
              onDuplicate={duplicateStep}
            />
          ))}
        </SortableContext>
      </DndContext>
      <button onClick={addStep}>+ Add Step</button>
    </div>
  );
}