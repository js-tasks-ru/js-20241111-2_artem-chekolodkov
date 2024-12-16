export default class NotificationMessage {

  static lastShownComponent

  constructor (text = '', { duration, type } = {}) {
    
    this.text = text;
    this.duration = duration;
    this.type = type;
    this.element = this.createElement();
  }

  createElement() {
    const element = document.createElement('div');
    element.innerHTML = this.createTemplate();
    return element.firstElementChild;
  }

  show(elementTarger = document.body) {
    if (NotificationMessage.lastShownComponent) {
      NotificationMessage.lastShownComponent.destroy();
    }
    NotificationMessage.lastShownComponent = this;
    elementTarger.appendChild(this.element);

    this.timerId = setTimeout(() => this.remove(), this.duration);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    clearTimeout(this.timerId);
    this.remove();
  }

  createTemplate() {
    return `
       <div class="notification ${this.type}" style='--value:${this.duration}ms'> 
       <div class="timer"></div>
        <div class="inner-wrapper">
            <div class="notification-header">
                Notification
            </div>
            <div class="notification-body">
                ${this.text}
        </div>
        </div>`;
  }

}