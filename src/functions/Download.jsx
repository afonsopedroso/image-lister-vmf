export function Download(fileURL, fileName) {
    // Create an anchor element
    const link = document.createElement("a");
    link.download = fileName;
    link.href = fileURL;
    // Dispatch a click event on the link
    link.dispatchEvent(new MouseEvent("click"));
}