module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    icon: 'fa fa-dashboard',
    name: 'Today',
    router: {
      name: 'Hello'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: 'Status',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Todo',
        router: {
          name: 'todo'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Doing',
        router: {
          name: 'doing'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Done',
        router: {
          name: 'done'
        }
      },
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: 'Group',
    items: []
  },
  {
    icon: 'fa fa-dashboard',
    name: 'LogBack',
    router: {
      name: 'logback'
    }
  },
  {
    icon: 'fa fa-dashboard',
    name: 'Trash',
    router: {
      name: 'trash'
    }
  },
]
