// AchievementTree.js
import React, { useState } from 'react';
import { achievementTree } from './TreeData'; // or define directly inside this file
import './AchievementTree.css';

function AchievementBubble({ node, toggleCompleted }) {
  return (
    <div
      className={`bubble ${node.completed ? 'completed' : ''}`}
      onClick={() => toggleCompleted(node.id)}
    >
      <span>{node.name}</span>
    </div>
  );
}

function renderTree(nodes, toggleCompleted) {
  return nodes.map((node) => (
    <div key={node.id} className="tree-node">
      <AchievementBubble node={node} toggleCompleted={toggleCompleted} />
      {node.children.length > 0 && (
        <div className="child-nodes">
          {renderTree(node.children, toggleCompleted)}
        </div>
      )}
    </div>
  ));
}

function AchievementTree() {
  const [treeData, setTreeData] = useState(achievementTree);

  const toggleCompleted = (id) => {
    const updatedTree = treeData.map((node) =>
      updateNodeCompleted(node, id)
    );
    setTreeData(updatedTree);
  };

  const updateNodeCompleted = (node, id) => {
    if (node.id === id) {
      return { ...node, completed: !node.completed };
    }
    if (node.children.length > 0) {
      node.children = node.children.map((child) => updateNodeCompleted(child, id));
    }
    return node;
  };

  return (
    <div className="achievement-tree">
      {renderTree(treeData, toggleCompleted)}
    </div>
  );
}

export default AchievementTree;
