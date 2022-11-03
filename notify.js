const unreadMsg = document.querySelectorAll(".unread");
const unread = document.getElementById('notifications');
const markAll = document.getElementById("markRead");

unread.innerText = unreadMsg.length;

unreadMsg.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.remove("unread");
        const newUnreadMsg = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMsg.length;
    })
})
markAll.addEventListener("click", () => {
    unreadMsg.forEach((message) => {
        message.classList.remove("unread");
    })
    const newUnreadMsg = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMsg.length;
})