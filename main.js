(function () {
  "use strict";

  var base = document.body.dataset.base || "";
  var navKey = document.body.dataset.nav || "";

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function injectSiteChrome() {
    var headerHost = document.getElementById("site-header");
    var footerHost = document.getElementById("site-footer");
    if (!headerHost || !footerHost) return;

    var items = [
      { href: base + "index.html", label: "Top", key: "home" },
      { href: base + "info.html", label: "Info", key: "info" },
      { href: base + "strength.html", label: "Strength", key: "strength" },
    ];

    var members = [
      { href: base + "newcomer-a/index.html", label: "おぐら　さん" },
      { href: base + "newcomer-b/index.html", label: "おび さん" },
      { href: base + "newcomer-c/index.html", label: "きむら さん" },
      { href: base + "members/ryuko/index.html", label: "散布流子（サンプル）" },
    ];

    var navLinks = items
      .map(function (it) {
        var active = it.key === navKey;
        return (
          '<a href="' +
          it.href +
          '"' +
          (active ? ' class="is-active"' : "") +
          ">" +
          esc(it.label) +
          "</a>"
        );
      })
      .join("");

    var subLinks = members
      .map(function (m) {
        return '<a href="' + m.href + '">' + esc(m.label) + "</a>";
      })
      .join("");

    headerHost.innerHTML =
      '<div class="site-header__inner">' +
      '<a class="brand" href="' +
      base +
      'index.html">' +
      '<span class="brand__mark" aria-hidden="true">○</span>' +
      '<span class="brand__text">' +
      '<span class="brand__name">○コーポレーション</span>' +
      '<span class="brand__tag">Newcomer Git Training</span>' +
      "</span></a>" +
      '<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" id="nav-toggle">' +
      '<span class="nav-toggle__bar"></span>' +
      '<span class="nav-toggle__bar"></span>' +
      '<span class="nav-toggle__bar"></span>' +
      '<span class="visually-hidden">メニューを開閉</span>' +
      "</button>" +
      '<nav class="site-nav" id="primary-nav" aria-label="主要ナビゲーション">' +
      navLinks +
      '<div class="site-nav__sub" role="group" aria-label="メンバーページ">' +
      subLinks +
      "</div></nav></div>";

    footerHost.innerHTML =
      '<div class="site-footer__inner">' +
      "<div>" +
      "<strong>○コーポレーション</strong>" +
      "Git / GitHub 学習用のダミーサイトです。掲載内容は架空です。" +
      "</div>" +
      "<div>© ○コーポレーション</div></div>";

    initMobileNav(headerHost);
  }

  function initMobileNav(headerEl) {
    var btn = document.getElementById("nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!btn || !nav) return;

    btn.addEventListener("click", function () {
      var open = headerEl.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          headerEl.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function initScrollHint() {
    var hint = document.querySelector(".scroll-hint");
    if (!hint) return;
    var onScroll = function () {
      if (window.scrollY > 40) hint.classList.add("is-hidden");
      else hint.classList.remove("is-hidden");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initCheerForm() {
    var form = document.getElementById("cheer-form");
    var feedback = document.getElementById("cheer-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ta = form.querySelector("textarea");
      var msg = (ta && ta.value.trim()) || "";
      if (!msg) {
        feedback.textContent = "メッセージを入力してから送信してください。";
        feedback.classList.add("is-visible");
        return;
      }
      feedback.textContent =
        "ありがとうございます！（デモ表示）送信内容はサーバーには保存されていません。";
      feedback.classList.add("is-visible");
      if (ta) ta.value = "";
    });
  }

  function initReveal() {
    var nodes = document.querySelectorAll(".js-reveal");
    if (!nodes.length || !("IntersectionObserver" in window)) {
      nodes.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach(function (el) {
      io.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectSiteChrome();
    initScrollHint();
    initCheerForm();
    initReveal();
  });
})();
