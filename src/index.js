import InterfaceComponent from "./interface.vue";

export default {
    id: "iframe",
    name: "IFrame",
    description: "Display an IFrame",
    icon: "iframe",
    component: InterfaceComponent,
    hideLabel: true,
    hideLoader: true,
    types: ["alias"],
    localTypes: ["presentation"],
    group: "presentation",
    options: ({ collection }) => [
        {
            field: "url",
            type: "full",
            name: "URL",
            meta: {
                width: "full",
                interface: "system-display-template",
                options: {
                    collectionName: collection,
                    font: "monospace",
                    placeholder: "Enter a URL",
                },
            },
        },
        {
            field: "height",
            type: "number",
            name: "Height",
            meta: {
                options: {
                    placeholder: "600",
                }
            }
        },
        {
            field: "frameWidth",
            type: "number",
            name: "Width",
            meta: {
                options: {
                    placeholder: "800",
                }
            }
        }
    ],
};