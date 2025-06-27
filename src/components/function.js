gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

class Animation {
  constructor() {
    this.scrollTriggers = [];
    this.timelines = [];
    this.eventListeners = []; // 新增：存儲事件監聽器
    this.slideFadeTextSimple(".slide-fade-text");
  }

  killAllAnimations() {
    // 銷毀ScrollTrigger實例
    this.scrollTriggers.forEach((trigger) => trigger.kill());
    this.scrollTriggers = [];

    // 銷毀Timeline實例
    this.timelines.forEach((tl) => tl.kill());
    this.timelines = [];

    // 移除所有事件監聽器
    this.eventListeners.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this.eventListeners = [];

    // 清除所有GSAP動畫
    gsap.globalTimeline.clear();
  }

  initScrollAnimations() {
    // 重置元素狀態
    gsap.utils.toArray(".fade-section").forEach((section) => {
      gsap.set(section, { y: 100, opacity: 0 });
    });

    // 創建滾動動畫
    gsap.utils.toArray(".fade-section").forEach((section, index) => {
      const animation = gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none none",
          id: `section-${index}`,
          // 添加刷新處理
          onRefresh: (self) => self.progress || self.animation.progress(0),
        },
      });

      // 存儲 ScrollTrigger 實例
      this.scrollTriggers.push(animation.scrollTrigger);
    });
  }

  scrambleText() {
    // 清除舊動畫
    this.timelines.forEach((tl) => tl.kill());
    this.timelines = [];

    // 創建新動畫
    gsap.utils.toArray(".poem-line").forEach((line) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });

      tl.to(line, {
        duration: 1.5,
        scrambleText: {
          text: "{original}",
          chars: "XO!@#$%^&*()_+-=[]{}|;':\",./<>?",
          tweenLength: false,
        },
        ease: "none",
      }).from(
        line,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=1"
      );

      // 存儲 Timeline 實例
      this.timelines.push(tl);
    });
  }

  // 修改blockEffect方法以存儲事件監聽器
  blockEffect() {
    const blockItems = document.querySelectorAll(".block-item");

    // 先移除舊的事件監聽器
    this.eventListeners = this.eventListeners.filter((listener) => {
      if (listener.handler.toString().includes("blockEffect")) {
        listener.element.removeEventListener(listener.type, listener.handler);
        return false;
      }
      return true;
    });

    blockItems.forEach((item) => {
      // 滑鼠移入效果
      const enterHandler = () => {
        gsap.to(item, {
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          duration: 0.1,
          ease: "power2.out",
        });

        const link = item.querySelector("a");
        gsap.to(link, {
          scale: 1.1,
          duration: 0.1,
          ease: "power2.out",
        });
      };

      // 滑鼠移出效果
      const leaveHandler = () => {
        gsap.to(item, {
          scale: 1,
          boxShadow: "none",
          duration: 0.1,
          ease: "power2.out",
        });

        const link = item.querySelector("a");
        gsap.to(link, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", enterHandler);
      item.addEventListener("mouseleave", leaveHandler);

      // 存儲事件監聽器以便後續移除
      this.eventListeners.push(
        { element: item, type: "mouseenter", handler: enterHandler },
        { element: item, type: "mouseleave", handler: leaveHandler }
      );
    });
  }
  // 單純左右滑入滑出動畫，支援多個元素與方向
  slideFadeTextSimple(selector = ".slide-fade-text") {
    gsap.utils.toArray(selector).forEach((el, index) => {
      const direction = el.dataset.direction || "left";
      const distance = 80;
      const fromX = direction === "left" ? -distance : distance;

      gsap.set(el, { x: fromX, opacity: 0 });

      // 第一個觸發範圍（一般情境）
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 0%",
          toggleActions: "play none none reverse",
          id: `slide-fade-main-${index}`,
        },
      });

      // 第二個觸發範圍（專為頁面底部設計）
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "bottom bottom", // 當元素底部碰到視窗底部時也觸發
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          id: `slide-fade-bottomfix-${index}`,
        },
      });
    });

    // 頁面載入後強制 refresh
    window.addEventListener("load", () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
  }
}

export default Animation;
