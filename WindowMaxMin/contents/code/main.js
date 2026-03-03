registerShortcut("WinMax", "Maximize Window (Not Toggle)", "F18", () => {
    let pos = workspace.cursorPos;
    let w = workspace.windowAt(pos)[0];
    workspace.activeWindow = w;
    if (!w) return;

    if (w.maximizeMode < 3) {
        w.setMaximize(1,1)
    }
    else
    {
        // print("MAX");
    }
});

registerShortcut("WinMin", "Unmaximize Window / Minimize", "F17", () => {
    let pos = workspace.cursorPos;
    let w = workspace.windowAt(pos)[0];
    workspace.activeWindow = w;
    if (!w) return;

    if (w.maximizeMode < 3) {
        w.minimized = true;
    }
    else
    {
        w.setMaximize(0,0)
    }
});
