const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '商品',
    key: '/product',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/product/category',
        icon: 'bars'
      },
      {
        title: '商品管理',
        key: '/product/product',
        icon: 'tool'
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },

  {
    title: '订单管理',
    key: '/order',
    icon: 'windows',
  },
  {
    title: '职能结构',
    key: '/tree',
    icon: 'windows',
    children: [ // 子菜单列表
      {
        title: '结构图',
        key: '/tree/form',
        icon: 'bars'
      },
      {
        title: '商品管理',
        key: '/tree/introduce',
        icon: 'tool'
      },
    ]
  },
  {
    title: '部门管理',
    key: '/master',
    icon: 'windows',
    children: [ // 子菜单列表
      {
        title: '部门成员',
        key: '/master/members',
        icon: 'bars'
      },
    ]
  },
]

export default menuList