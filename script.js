//your JS code here. If required.
function updateText() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Hello, world!");
        }, 1000);
      });
    }

    // Update the text after the promise resolves
    updateText().then((text) => {
      const outputElement = document.getElementById("output");
      outputElement.textContent = text;
    });