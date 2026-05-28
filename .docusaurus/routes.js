import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bde'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/alexanderfandos',
    component: ComponentCreator('/blog/authors/alexanderfandos', 'c31'),
    exact: true
  },
  {
    path: '/blog/authors/alexandervera',
    component: ComponentCreator('/blog/authors/alexandervera', 'bef'),
    exact: true
  },
  {
    path: '/blog/authors/galonavarro',
    component: ComponentCreator('/blog/authors/galonavarro', '38b'),
    exact: true
  },
  {
    path: '/blog/authors/jaumedevesa',
    component: ComponentCreator('/blog/authors/jaumedevesa', '127'),
    exact: true
  },
  {
    path: '/blog/authors/jimkennedy',
    component: ComponentCreator('/blog/authors/jimkennedy', '083'),
    exact: true
  },
  {
    path: '/blog/authors/midoteam',
    component: ComponentCreator('/blog/authors/midoteam', '346'),
    exact: true
  },
  {
    path: '/blog/authors/sergimiralles',
    component: ComponentCreator('/blog/authors/sergimiralles', '055'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/aifactory',
    component: ComponentCreator('/blog/tags/aifactory', '939'),
    exact: true
  },
  {
    path: '/blog/v25.1.0',
    component: ComponentCreator('/blog/v25.1.0', 'e4b'),
    exact: true
  },
  {
    path: '/blog/v25.1.1',
    component: ComponentCreator('/blog/v25.1.1', '07f'),
    exact: true
  },
  {
    path: '/blog/v25.1.2',
    component: ComponentCreator('/blog/v25.1.2', '1c7'),
    exact: true
  },
  {
    path: '/blog/v26.1.0',
    component: ComponentCreator('/blog/v26.1.0', '5c3'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/upgrade-guide',
    component: ComponentCreator('/upgrade-guide', '45a'),
    exact: true
  },
  {
    path: '/upgrade-guide/archive',
    component: ComponentCreator('/upgrade-guide/archive', 'd03'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors',
    component: ComponentCreator('/upgrade-guide/authors', '234'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors/alexanderfandos',
    component: ComponentCreator('/upgrade-guide/authors/alexanderfandos', 'c6b'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors/alexandervera',
    component: ComponentCreator('/upgrade-guide/authors/alexandervera', '811'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors/galonavarro',
    component: ComponentCreator('/upgrade-guide/authors/galonavarro', '46a'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors/jaumedevesa',
    component: ComponentCreator('/upgrade-guide/authors/jaumedevesa', '333'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors/jimkennedy',
    component: ComponentCreator('/upgrade-guide/authors/jimkennedy', '9a1'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors/midoteam',
    component: ComponentCreator('/upgrade-guide/authors/midoteam', '6ef'),
    exact: true
  },
  {
    path: '/upgrade-guide/authors/sergimiralles',
    component: ComponentCreator('/upgrade-guide/authors/sergimiralles', 'f23'),
    exact: true
  },
  {
    path: '/upgrade-guide/tags',
    component: ComponentCreator('/upgrade-guide/tags', 'c0b'),
    exact: true
  },
  {
    path: '/upgrade-guide/tags/aifactory',
    component: ComponentCreator('/upgrade-guide/tags/aifactory', 'cc8'),
    exact: true
  },
  {
    path: '/upgrade-guide/v25.1.1',
    component: ComponentCreator('/upgrade-guide/v25.1.1', 'bed'),
    exact: true
  },
  {
    path: '/upgrade-guide/v25.1.2',
    component: ComponentCreator('/upgrade-guide/v25.1.2', 'b4a'),
    exact: true
  },
  {
    path: '/upgrade-guide/v26.1.0',
    component: ComponentCreator('/upgrade-guide/v26.1.0', '2e6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fc9'),
    routes: [
      {
        path: '/docs/v25.1.0',
        component: ComponentCreator('/docs/v25.1.0', 'bdb'),
        routes: [
          {
            path: '/docs/v25.1.0',
            component: ComponentCreator('/docs/v25.1.0', '714'),
            routes: [
              {
                path: '/docs/v25.1.0/category/key-rotation-runbooks',
                component: ComponentCreator('/docs/v25.1.0/category/key-rotation-runbooks', '44d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/category/observability',
                component: ComponentCreator('/docs/v25.1.0/category/observability', '6f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/category/runbooks',
                component: ComponentCreator('/docs/v25.1.0/category/runbooks', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/category/service-operator',
                component: ComponentCreator('/docs/v25.1.0/category/service-operator', '7de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/category/software-update-runbooks',
                component: ComponentCreator('/docs/v25.1.0/category/software-update-runbooks', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/category/user',
                component: ComponentCreator('/docs/v25.1.0/category/user', 'a2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/license',
                component: ComponentCreator('/docs/v25.1.0/license', '3f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/ADDONS_API_REFERENCE',
                component: ComponentCreator('/docs/v25.1.0/service-operator/ADDONS_API_REFERENCE', '7ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/ADDONS_OPERATOR_GUIDE',
                component: ComponentCreator('/docs/v25.1.0/service-operator/ADDONS_OPERATOR_GUIDE', '6de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/AZURE_SSO_SETUP',
                component: ComponentCreator('/docs/v25.1.0/service-operator/AZURE_SSO_SETUP', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/CAPI_MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docs/v25.1.0/service-operator/CAPI_MANAGEMENT_CLUSTER', '278'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/CEPH_SETUP',
                component: ComponentCreator('/docs/v25.1.0/service-operator/CEPH_SETUP', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/DEPLOYMENT',
                component: ComponentCreator('/docs/v25.1.0/service-operator/DEPLOYMENT', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/GHCR_AUTHENTICATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/GHCR_AUTHENTICATION', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/GOOGLE_SSO_SETUP',
                component: ComponentCreator('/docs/v25.1.0/service-operator/GOOGLE_SSO_SETUP', 'cbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/IAAS_CONSOLE_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/IAAS_CONSOLE_CONFIGURATION', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/INSTALL_BAREMETAL_NODE',
                component: ComponentCreator('/docs/v25.1.0/service-operator/INSTALL_BAREMETAL_NODE', '146'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP',
                component: ComponentCreator('/docs/v25.1.0/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP', '72f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/KEY_MANAGEMENT_POLICY',
                component: ComponentCreator('/docs/v25.1.0/service-operator/KEY_MANAGEMENT_POLICY', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/MANAGEMENT_TLS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/MANAGEMENT_TLS', '294'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/NETWORK_CONTROL_NODE_SETUP',
                component: ComponentCreator('/docs/v25.1.0/service-operator/NETWORK_CONTROL_NODE_SETUP', '229'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/observability/OBSERVABILITY_ALERTS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/observability/OBSERVABILITY_ALERTS', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/observability/OBSERVABILITY_DASHBOARDS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/observability/OBSERVABILITY_DASHBOARDS', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/observability/OBSERVABILITY_STORAGE',
                component: ComponentCreator('/docs/v25.1.0/service-operator/observability/OBSERVABILITY_STORAGE', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/OPERATOR_API_GUIDE',
                component: ComponentCreator('/docs/v25.1.0/service-operator/OPERATOR_API_GUIDE', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/OPERATOR_OVERVIEW',
                component: ComponentCreator('/docs/v25.1.0/service-operator/OPERATOR_OVERVIEW', 'bab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/OPERATOR_VPN_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/OPERATOR_VPN_CONFIGURATION', '828'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/OS_REQUIREMENTS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/OS_REQUIREMENTS', 'dfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/PUBLIC_IP_ACCESS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/PUBLIC_IP_ACCESS', '041'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/ROUTER_BOX_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/ROUTER_BOX_CONFIGURATION', '451'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/ROUTER_BOX_SETUP',
                component: ComponentCreator('/docs/v25.1.0/service-operator/ROUTER_BOX_SETUP', '316'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS', 'f57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/CEPH_NODE_MAINTENANCE',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/CEPH_NODE_MAINTENANCE', 'bfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS', '070'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/GET_PROVISIONING_LOGS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/GET_PROVISIONING_LOGS', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS', '5e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS', '570'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/KEY_ROTATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/KEY_ROTATION', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/key-rotation/ANSIBLE_VAULT',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/key-rotation/ANSIBLE_VAULT', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/key-rotation/SSH_KEYS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/key-rotation/SSH_KEYS', '2e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/key-rotation/TLS_CERTIFICATES',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/key-rotation/TLS_CERTIFICATES', '0a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION', 'e2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/PERSONAL_DATA_DISPOSAL',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/PERSONAL_DATA_DISPOSAL', 'cff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/ROUTER_LOG_ACCESS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/ROUTER_LOG_ACCESS', '766'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/SOFTWARE_UPDATES',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/SOFTWARE_UPDATES', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT', '451'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/TENANT_SERVICE_TERMINATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/TENANT_SERVICE_TERMINATION', 'ebf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/updates/CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/updates/CONFIGURATION', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/updates/MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/updates/MANAGEMENT_CLUSTER', '39c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/updates/NODES',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/updates/NODES', '04e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/updates/OPENSTACK',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/updates/OPENSTACK', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/runbooks/updates/PAAS',
                component: ComponentCreator('/docs/v25.1.0/service-operator/runbooks/updates/PAAS', 'd19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/service-operator/VPN_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.0/service-operator/VPN_CONFIGURATION', '5a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/ADDONS_USER_GUIDE',
                component: ComponentCreator('/docs/v25.1.0/user/ADDONS_USER_GUIDE', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/BAREMETAL_MANAGEMENT',
                component: ComponentCreator('/docs/v25.1.0/user/BAREMETAL_MANAGEMENT', '47f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/GPU_SERVER_VERIFICATION',
                component: ComponentCreator('/docs/v25.1.0/user/GPU_SERVER_VERIFICATION', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/KUBERNETES_CLUSTER_REFERENCE',
                component: ComponentCreator('/docs/v25.1.0/user/KUBERNETES_CLUSTER_REFERENCE', 'e06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/OBJECT_STORE_MANAGEMENT',
                component: ComponentCreator('/docs/v25.1.0/user/OBJECT_STORE_MANAGEMENT', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/OBSERVABILITY',
                component: ComponentCreator('/docs/v25.1.0/user/OBSERVABILITY', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/PUBLIC-IP-ACCESS',
                component: ComponentCreator('/docs/v25.1.0/user/PUBLIC-IP-ACCESS', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/SSH_KEY_REGISTRATION',
                component: ComponentCreator('/docs/v25.1.0/user/SSH_KEY_REGISTRATION', '296'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/VM_MANAGEMENT',
                component: ComponentCreator('/docs/v25.1.0/user/VM_MANAGEMENT', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.0/user/VPN_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.0/user/VPN_CONFIGURATION', '83c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/v25.1.1',
        component: ComponentCreator('/docs/v25.1.1', '6b4'),
        routes: [
          {
            path: '/docs/v25.1.1',
            component: ComponentCreator('/docs/v25.1.1', '393'),
            routes: [
              {
                path: '/docs/v25.1.1/category/key-rotation-runbooks',
                component: ComponentCreator('/docs/v25.1.1/category/key-rotation-runbooks', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/category/observability',
                component: ComponentCreator('/docs/v25.1.1/category/observability', 'b1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/category/runbooks',
                component: ComponentCreator('/docs/v25.1.1/category/runbooks', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/category/service-operator',
                component: ComponentCreator('/docs/v25.1.1/category/service-operator', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/category/software-update-runbooks',
                component: ComponentCreator('/docs/v25.1.1/category/software-update-runbooks', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/category/user',
                component: ComponentCreator('/docs/v25.1.1/category/user', '31f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/license',
                component: ComponentCreator('/docs/v25.1.1/license', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/ADDONS_API_REFERENCE',
                component: ComponentCreator('/docs/v25.1.1/service-operator/ADDONS_API_REFERENCE', '1d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/ADDONS_OPERATOR_GUIDE',
                component: ComponentCreator('/docs/v25.1.1/service-operator/ADDONS_OPERATOR_GUIDE', 'ce5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/AZURE_SSO_SETUP',
                component: ComponentCreator('/docs/v25.1.1/service-operator/AZURE_SSO_SETUP', '562'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/CAPI_MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docs/v25.1.1/service-operator/CAPI_MANAGEMENT_CLUSTER', '8df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/CEPH_SETUP',
                component: ComponentCreator('/docs/v25.1.1/service-operator/CEPH_SETUP', '81d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/DEPLOYMENT',
                component: ComponentCreator('/docs/v25.1.1/service-operator/DEPLOYMENT', '22d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/GHCR_AUTHENTICATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/GHCR_AUTHENTICATION', '5ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/GOOGLE_SSO_SETUP',
                component: ComponentCreator('/docs/v25.1.1/service-operator/GOOGLE_SSO_SETUP', '2ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/IAAS_CONSOLE_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/IAAS_CONSOLE_CONFIGURATION', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/INSTALL_BAREMETAL_NODE',
                component: ComponentCreator('/docs/v25.1.1/service-operator/INSTALL_BAREMETAL_NODE', '835'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP',
                component: ComponentCreator('/docs/v25.1.1/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP', '5c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/KEY_MANAGEMENT_POLICY',
                component: ComponentCreator('/docs/v25.1.1/service-operator/KEY_MANAGEMENT_POLICY', '152'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/MANAGEMENT_TLS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/MANAGEMENT_TLS', '0ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/NETWORK_CONTROL_NODE_SETUP',
                component: ComponentCreator('/docs/v25.1.1/service-operator/NETWORK_CONTROL_NODE_SETUP', '6d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/observability/OBSERVABILITY_ALERTS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/observability/OBSERVABILITY_ALERTS', 'dbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/observability/OBSERVABILITY_DASHBOARDS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/observability/OBSERVABILITY_DASHBOARDS', 'aa3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/observability/OBSERVABILITY_STORAGE',
                component: ComponentCreator('/docs/v25.1.1/service-operator/observability/OBSERVABILITY_STORAGE', '453'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/OPERATOR_API_GUIDE',
                component: ComponentCreator('/docs/v25.1.1/service-operator/OPERATOR_API_GUIDE', '98e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/OPERATOR_OVERVIEW',
                component: ComponentCreator('/docs/v25.1.1/service-operator/OPERATOR_OVERVIEW', '822'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/OPERATOR_VPN_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/OPERATOR_VPN_CONFIGURATION', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/OS_REQUIREMENTS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/OS_REQUIREMENTS', 'cc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/PUBLIC_IP_ACCESS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/PUBLIC_IP_ACCESS', 'f3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/ROUTER_BOX_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/ROUTER_BOX_CONFIGURATION', '3cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/ROUTER_BOX_SETUP',
                component: ComponentCreator('/docs/v25.1.1/service-operator/ROUTER_BOX_SETUP', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/CEPH_NODE_MAINTENANCE',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/CEPH_NODE_MAINTENANCE', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/GET_PROVISIONING_LOGS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/GET_PROVISIONING_LOGS', 'd28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS', 'a1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS', '1c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/KEY_ROTATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/KEY_ROTATION', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/key-rotation/ANSIBLE_VAULT',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/key-rotation/ANSIBLE_VAULT', '7aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/key-rotation/SSH_KEYS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/key-rotation/SSH_KEYS', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/key-rotation/TLS_CERTIFICATES',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/key-rotation/TLS_CERTIFICATES', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/PERSONAL_DATA_DISPOSAL',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/PERSONAL_DATA_DISPOSAL', 'df5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/ROUTER_LOG_ACCESS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/ROUTER_LOG_ACCESS', '9c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/SOFTWARE_UPDATES',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/SOFTWARE_UPDATES', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/TENANT_SERVICE_TERMINATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/TENANT_SERVICE_TERMINATION', '879'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/updates/CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/updates/CONFIGURATION', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/updates/MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/updates/MANAGEMENT_CLUSTER', '8aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/updates/NODES',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/updates/NODES', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/updates/OPENSTACK',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/updates/OPENSTACK', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/runbooks/updates/PAAS',
                component: ComponentCreator('/docs/v25.1.1/service-operator/runbooks/updates/PAAS', '950'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/service-operator/VPN_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.1/service-operator/VPN_CONFIGURATION', '97f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/ADDONS_USER_GUIDE',
                component: ComponentCreator('/docs/v25.1.1/user/ADDONS_USER_GUIDE', '152'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/BAREMETAL_MANAGEMENT',
                component: ComponentCreator('/docs/v25.1.1/user/BAREMETAL_MANAGEMENT', 'de8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/GPU_SERVER_VERIFICATION',
                component: ComponentCreator('/docs/v25.1.1/user/GPU_SERVER_VERIFICATION', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/KUBERNETES_CLUSTER_REFERENCE',
                component: ComponentCreator('/docs/v25.1.1/user/KUBERNETES_CLUSTER_REFERENCE', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/OBJECT_STORE_MANAGEMENT',
                component: ComponentCreator('/docs/v25.1.1/user/OBJECT_STORE_MANAGEMENT', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/OBSERVABILITY',
                component: ComponentCreator('/docs/v25.1.1/user/OBSERVABILITY', '494'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/PUBLIC-IP-ACCESS',
                component: ComponentCreator('/docs/v25.1.1/user/PUBLIC-IP-ACCESS', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/SSH_KEY_REGISTRATION',
                component: ComponentCreator('/docs/v25.1.1/user/SSH_KEY_REGISTRATION', '13a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/VM_MANAGEMENT',
                component: ComponentCreator('/docs/v25.1.1/user/VM_MANAGEMENT', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/v25.1.1/user/VPN_CONFIGURATION',
                component: ComponentCreator('/docs/v25.1.1/user/VPN_CONFIGURATION', 'c8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '7f1'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a1e'),
            routes: [
              {
                path: '/docs/category/key-rotation-runbooks',
                component: ComponentCreator('/docs/category/key-rotation-runbooks', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/observability',
                component: ComponentCreator('/docs/category/observability', '567'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/runbooks',
                component: ComponentCreator('/docs/category/runbooks', '228'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/service-operator',
                component: ComponentCreator('/docs/category/service-operator', '01b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/software-update-runbooks',
                component: ComponentCreator('/docs/category/software-update-runbooks', '525'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/user',
                component: ComponentCreator('/docs/category/user', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/license',
                component: ComponentCreator('/docs/license', '5d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/ADDONS_API_REFERENCE',
                component: ComponentCreator('/docs/service-operator/ADDONS_API_REFERENCE', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/ADDONS_OPERATOR_GUIDE',
                component: ComponentCreator('/docs/service-operator/ADDONS_OPERATOR_GUIDE', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/AZURE_SSO_SETUP',
                component: ComponentCreator('/docs/service-operator/AZURE_SSO_SETUP', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/CAPI_MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docs/service-operator/CAPI_MANAGEMENT_CLUSTER', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/CEPH_SETUP',
                component: ComponentCreator('/docs/service-operator/CEPH_SETUP', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/DEPLOYMENT',
                component: ComponentCreator('/docs/service-operator/DEPLOYMENT', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/GHCR_AUTHENTICATION',
                component: ComponentCreator('/docs/service-operator/GHCR_AUTHENTICATION', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/GOOGLE_SSO_SETUP',
                component: ComponentCreator('/docs/service-operator/GOOGLE_SSO_SETUP', '5a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/IAAS_CONSOLE_CONFIGURATION',
                component: ComponentCreator('/docs/service-operator/IAAS_CONSOLE_CONFIGURATION', 'b66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/INSTALL_BAREMETAL_NODE',
                component: ComponentCreator('/docs/service-operator/INSTALL_BAREMETAL_NODE', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP',
                component: ComponentCreator('/docs/service-operator/IPMI_SNMP_OBSERVABILITY_SETUP', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/KEY_MANAGEMENT_POLICY',
                component: ComponentCreator('/docs/service-operator/KEY_MANAGEMENT_POLICY', 'b61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/MANAGEMENT_TLS',
                component: ComponentCreator('/docs/service-operator/MANAGEMENT_TLS', 'd74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/NETWORK_CONTROL_NODE_SETUP',
                component: ComponentCreator('/docs/service-operator/NETWORK_CONTROL_NODE_SETUP', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/observability/OBSERVABILITY_ALERTS',
                component: ComponentCreator('/docs/service-operator/observability/OBSERVABILITY_ALERTS', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/observability/OBSERVABILITY_DASHBOARDS',
                component: ComponentCreator('/docs/service-operator/observability/OBSERVABILITY_DASHBOARDS', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/observability/OBSERVABILITY_STORAGE',
                component: ComponentCreator('/docs/service-operator/observability/OBSERVABILITY_STORAGE', '922'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/OPERATOR_API_GUIDE',
                component: ComponentCreator('/docs/service-operator/OPERATOR_API_GUIDE', 'a6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/OPERATOR_OVERVIEW',
                component: ComponentCreator('/docs/service-operator/OPERATOR_OVERVIEW', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/OPERATOR_VPN_CONFIGURATION',
                component: ComponentCreator('/docs/service-operator/OPERATOR_VPN_CONFIGURATION', '9b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/OS_REQUIREMENTS',
                component: ComponentCreator('/docs/service-operator/OS_REQUIREMENTS', '784'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/PUBLIC_IP_ACCESS',
                component: ComponentCreator('/docs/service-operator/PUBLIC_IP_ACCESS', '60f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/ROUTER_BOX_CONFIGURATION',
                component: ComponentCreator('/docs/service-operator/ROUTER_BOX_CONFIGURATION', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/ROUTER_BOX_SETUP',
                component: ComponentCreator('/docs/service-operator/ROUTER_BOX_SETUP', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS',
                component: ComponentCreator('/docs/service-operator/runbooks/CAPI_CLUSTER_HEALTH_ALERTS', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/CEPH_NODE_MAINTENANCE',
                component: ComponentCreator('/docs/service-operator/runbooks/CEPH_NODE_MAINTENANCE', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS',
                component: ComponentCreator('/docs/service-operator/runbooks/DELETE_ORPHANED_CLUSTERS', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/GET_PROVISIONING_LOGS',
                component: ComponentCreator('/docs/service-operator/runbooks/GET_PROVISIONING_LOGS', '8ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS',
                component: ComponentCreator('/docs/service-operator/runbooks/HEDGEHOG_SWITCH_CREDENTIALS', '525'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS',
                component: ComponentCreator('/docs/service-operator/runbooks/HEDGEHOG_VM_CREDENTIALS', '37b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/KEY_ROTATION',
                component: ComponentCreator('/docs/service-operator/runbooks/KEY_ROTATION', '47d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/key-rotation/ANSIBLE_VAULT',
                component: ComponentCreator('/docs/service-operator/runbooks/key-rotation/ANSIBLE_VAULT', '58a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/key-rotation/SSH_KEYS',
                component: ComponentCreator('/docs/service-operator/runbooks/key-rotation/SSH_KEYS', 'e28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/key-rotation/TLS_CERTIFICATES',
                component: ComponentCreator('/docs/service-operator/runbooks/key-rotation/TLS_CERTIFICATES', '02d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS',
                component: ComponentCreator('/docs/service-operator/runbooks/key-rotation/VPN_WIREGUARD_KEYS', '791'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION',
                component: ComponentCreator('/docs/service-operator/runbooks/MGMT_CLUSTER_SUBNET_MIGRATION', '299'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/PERSONAL_DATA_DISPOSAL',
                component: ComponentCreator('/docs/service-operator/runbooks/PERSONAL_DATA_DISPOSAL', 'd62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/ROUTER_LOG_ACCESS',
                component: ComponentCreator('/docs/service-operator/runbooks/ROUTER_LOG_ACCESS', 'd88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/SOFTWARE_UPDATES',
                component: ComponentCreator('/docs/service-operator/runbooks/SOFTWARE_UPDATES', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT',
                component: ComponentCreator('/docs/service-operator/runbooks/SWITCH_HEARTBEAT_ALERT', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/TENANT_SERVICE_TERMINATION',
                component: ComponentCreator('/docs/service-operator/runbooks/TENANT_SERVICE_TERMINATION', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/updates/CONFIGURATION',
                component: ComponentCreator('/docs/service-operator/runbooks/updates/CONFIGURATION', '710'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/updates/MANAGEMENT_CLUSTER',
                component: ComponentCreator('/docs/service-operator/runbooks/updates/MANAGEMENT_CLUSTER', 'f21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/updates/NODES',
                component: ComponentCreator('/docs/service-operator/runbooks/updates/NODES', 'c7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/updates/OPENSTACK',
                component: ComponentCreator('/docs/service-operator/runbooks/updates/OPENSTACK', '5e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/runbooks/updates/PAAS',
                component: ComponentCreator('/docs/service-operator/runbooks/updates/PAAS', '52e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/service-operator/VPN_CONFIGURATION',
                component: ComponentCreator('/docs/service-operator/VPN_CONFIGURATION', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/ADDONS_USER_GUIDE',
                component: ComponentCreator('/docs/user/ADDONS_USER_GUIDE', '1fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/BAREMETAL_MANAGEMENT',
                component: ComponentCreator('/docs/user/BAREMETAL_MANAGEMENT', '764'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/GPU_SERVER_VERIFICATION',
                component: ComponentCreator('/docs/user/GPU_SERVER_VERIFICATION', '686'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/KUBERNETES_CLUSTER_REFERENCE',
                component: ComponentCreator('/docs/user/KUBERNETES_CLUSTER_REFERENCE', '94d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/OBJECT_STORE_MANAGEMENT',
                component: ComponentCreator('/docs/user/OBJECT_STORE_MANAGEMENT', 'dff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/OBSERVABILITY',
                component: ComponentCreator('/docs/user/OBSERVABILITY', 'b99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/PUBLIC-IP-ACCESS',
                component: ComponentCreator('/docs/user/PUBLIC-IP-ACCESS', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/SSH_KEY_REGISTRATION',
                component: ComponentCreator('/docs/user/SSH_KEY_REGISTRATION', 'def'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/VM_MANAGEMENT',
                component: ComponentCreator('/docs/user/VM_MANAGEMENT', 'eed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user/VPN_CONFIGURATION',
                component: ComponentCreator('/docs/user/VPN_CONFIGURATION', '512'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
