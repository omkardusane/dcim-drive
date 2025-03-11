document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('sendBtn');
    const input = document.getElementById('input1');

    btn?.addEventListener('click', () => {
        let text = input.value;
        window.electron.sendMessage('test-channel', { message: 'Hello from Renderer!', text });
    });

    window.electron.receiveMessage('reply-channel', (data) => {
        console.log('Received from Main:', data);
    });
});
