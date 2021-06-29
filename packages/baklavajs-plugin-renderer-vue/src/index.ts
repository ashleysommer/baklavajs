export { default as Editor } from "./components/Editor.vue";

import Connection from "./components/connection/ConnectionView.vue";
import ConnectionWrapper from "./components/connection/ConnectionWrapper.vue";
import TemporaryConnection from "./components/connection/TemporaryConnection.vue";
import NodeView from "./components/node/Node.vue";
import NodeInterfaceView from "./components/node/NodeInterface.vue";
import NodeOptionView from "./components/node/NodeOption.vue";
import ContextMenu from "./components/ContextMenu.vue";
import Sidebar from "./components/Sidebar.vue";
import Minimap from "./components/Minimap.vue";

export const Components = {
    Connection, ConnectionWrapper, TemporaryConnection,
    NodeView, NodeInterfaceView, NodeOptionView,
    ContextMenu, Sidebar, Minimap
};

export * from "./baklavaVuePlugin";
export * from "./viewPlugin";
