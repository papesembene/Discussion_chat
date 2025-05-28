export function createElement(tag, props = {}, content = "") 
{
    if (typeof tag !== "string") return null;
    // Gestion de v-if
    if ('vIf' in props && !props.vIf) return null;

    // Gestion de v-for (retourne un fragment)
   

    const el = document.createElement(tag);

    for (const key in props) 
    {
        const value = props[key];

        // Classes

        if (key === "class" || key === "className") {
            // if (Array.isArray(value) ) {
            //     el.className  = value.join(" ")
            // } else {
            //     el.className = value
            // }
            el.className = Array.isArray(value) ? value.join(" ") : value;
        }

        // Événements
        else if (key.startsWith("on") && typeof value === "function") 
        {
            const eventName = key.slice(2).toLowerCase();
            el.addEventListener(eventName, value);
    
        }

        // v-show => toggle `display: none`
        else if (key === "vShow") {
            el.style.display = value ? "" : "none";
        }

        // vIf et vFor 
        else if (key === "vIf" || key === "vFor") {
            continue;
        }

        // :attr => dynamic binding
        else if (key.startsWith(":")) {
            const realAttr = key.slice(1);
            el.setAttribute(realAttr, value);
        }

        // style objet
        else if (key === "style" && typeof value === "object") {
            Object.assign(el.style, value);
        }

        // Attribut HTML classique
        else {
            el.setAttribute(key, value);
        }
    }

  // Gestion de v-for (injecte les enfants dynamiquement)
    if ('vFor' in props) {
        const { each, render } = props.vFor;

        if (typeof each === 'number') {
            for (let i = 0; i < each; i++) {
                const child = render(i);
                if (child instanceof Node) {
                    el.appendChild(child);
                }
            }
        } else if (Array.isArray(each)) {
            each.forEach((item, index) => {
                const child = render(item, index);
                if (child instanceof Node) {
                    el.appendChild(child);
                }
            });
        }
    }
    else{

    // Contenu : string | Node | array
    if (Array.isArray(content)) {
        content.forEach(item => {
            if (typeof item === "string") {
                el.appendChild(document.createTextNode(item));
            } else if (item instanceof Node) {
                el.appendChild(item);
            }
        });
    } else if (typeof content === "string") {
        el.textContent = content;
    } else if (content instanceof Node) {
        el.appendChild(content);
    }
    }

    // Méthodes pour chaînage
    el.addElement = function (tag, props = {}, content = "") {
        const newEl = createElement(tag, props, content);
        this.appendChild(newEl);
        return this;
    };
    el.addNode = function (node) {
        this.appendChild(node);
        return this;
    };

    return el;
}
