// TreeData.js (or inside your component file)
export const achievementTree = [
    {
      id: 1,
      name: 'Too Late',
      description: 'Sleep through an 8am class',
      completed: false,
      children: [
        {
          id: 2,
          name: 'Sub-goal 1.1',
          description: 'Description of Sub-goal 1.1',
          completed: false,
          children: []
        },
        {
          id: 3,
          name: 'Sub-goal 1.2',
          description: 'Description of Sub-goal 1.2',
          completed: false,
          children: []
        }
      ]
    },
    {
      id: 4,
      name: 'Goal 2',
      description: 'Description of Goal 2',
      completed: false,
      children: []
    }
  ];
  