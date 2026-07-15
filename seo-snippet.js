// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.skibycabinets.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.skibycabinets.com/","title_tag":"Kitchen Cabinets & Custom Cabinets | Skiby Cabinets","meta_description":"Kitchen cabinets, custom framed and frameless cabinets with quality cabinet service, design consultation, fast delivery and installation from Skiby Cabinets."},{"page_url":"http://www.skibycabinets.com/","title_tag":"Kitchen Cabinets & Custom Cabinets | Skiby Cabinets","meta_description":"Kitchen cabinets, custom framed and frameless cabinets with quality cabinet service, design consultation, fast delivery and installation from Skiby Cabinets."},{"page_url":"https://www.skibycabinets.com/cabinets","title_tag":"Kitchen Cabinets Frameless & Framed | Skiby Cabinets","meta_description":"Stylish framed and frameless kitchen cabinets with custom cabinet options, quality cabinet service and expert cabinet design consultation at Skiby Cabinets."},{"page_url":"https://www.skibycabinets.com/vanities","title_tag":"Bathroom Vanities & Custom Cabinets | Skiby Cabinets","meta_description":"Bathroom vanities in framed and frameless styles, custom cabinets and quality cabinet service to match your bath design and budget at Skiby Cabinets."},{"page_url":"https://www.skibycabinets.com/gallery","title_tag":"Kitchen Cabinets & Bathroom Vanities | Skiby Cabinets","meta_description":"View our gallery of kitchen cabinets, bathroom vanities and custom cabinets, including framed and frameless cabinet projects by Skiby Cabinets."},{"page_url":"https://www.skibycabinets.com/about","title_tag":"Custom Cabinets & Quality Cabinet Service | Skiby Cabinets","meta_description":"Learn about Skiby Cabinets, offering custom cabinets, kitchen cabinets, bathroom vanities, cabinet delivery services and expert cabinet installation."},{"page_url":"https://www.skibycabinets.com/contact","title_tag":"Cabinet Design Consultation & Service | Skiby Cabinets","meta_description":"Contact Skiby Cabinets for cabinet design consultation, kitchen cabinets, bathroom vanities, custom cabinets, delivery and installation services."},{"page_url":"https://www.skibycabinets.com/services-3","title_tag":"Cabinet Warranty & Quality Cabinet Service | Skiby Cabinets","meta_description":"Review the Skiby Cabinets warranty covering kitchen cabinets, bathroom vanities and custom cabinets backed by quality cabinet service and support."}],"keywords":["Kitchen Cabinets","Bathroom Vanities","Custom Cabinets","Frameless Cabinets","Framed Cabinets","Quality Cabinet Service","Cabinet Design Consultation","Skiby Cabinets","Cabinet Delivery Services","Cabinet Installation"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.skibycabinets.com/#localbusiness",
  "name": "Skiby Cabinets",
  "url": "https://www.skibycabinets.com/",
  "image": [
    "https://static.wixstatic.com/media/b49864_8e306328d6f445eaab36d242974d463c%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/b49864_8e306328d6f445eaab36d242974d463c%7Emv2.jpg",
    "https://static.wixstatic.com/media/b49864_48ec4662405f4652b006e22eea483324~mv2.jpg/v1/fill/w_329,h_86,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo-1699220948675_edited_edited.jpg"
  ],
  "telephone": "+1-586-243-7525",
  "email": "info@skibycabinets.com",
  "description": "Skiby Cabinets is a kitchen and bath cabinets seller based in Utica, MI, offering competitively-priced framed, frameless, and European flat door cabinets with free measuring, design, and consultation services.",
  "priceRange": "$$",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Michigan and surrounding areas"
  },
  "foundingDate": "2021",
  "logo": "https://static.wixstatic.com/media/b49864_8e306328d6f445eaab36d242974d463c%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/b49864_8e306328d6f445eaab36d242974d463c%7Emv2.jpg",
  "sameAs": [
    "https://www.skibycabinets.com/"
  ],
  "serviceType": [
    "Kitchen cabinets",
    "Bathroom cabinets",
    "Framed cabinets",
    "Frameless cabinets",
    "European flat door cabinets",
    "Free kitchen measuring and design",
    "In-store cabinet consultations",
    "Cabinet delivery"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Skiby Cabinets Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Framed Cabinets",
          "description": "High-quality framed kitchen and bath cabinets available in multiple styles and finishes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frameless Cabinets",
          "description": "Modern frameless cabinets designed for maximum storage and a clean, contemporary look."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "European Flat Door Cabinets",
          "description": "Sleek European flat door cabinet styles for kitchens and bathrooms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Kitchen Measure and Design",
          "description": "Exclusive free kitchen measuring and design service to help you plan your dream kitchen, no credit card required."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free In-Store Consultations by Appointment",
          "description": "Free in-store or at-home cabinet consultations by appointment with a design expert."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cabinet Delivery",
          "description": "Delivery of assembled or unassembled kitchen and bath cabinets, typically within 7–20 days of ordering."
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John Smith"
      },
      "reviewBody": "Skiby Cabinets provided excellent service and helped me find the perfect cabinets for my kitchen. Highly recommend!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Samantha Jones"
      },
      "reviewBody": "Skiby Cabinets exceeded my expectations with their quality products and exceptional customer service. I will definitely be returning for future projects."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Michael Johnson"
      },
      "reviewBody": "I am thrilled with the cabinets I purchased from Skiby Cabinets. The team was knowledgeable and friendly, and the installation process was seamless."
    }
  ],
  "hasFAQ": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Skiby Cabinets offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Skiby Cabinets offers kitchen and bath cabinets including framed, frameless, and European flat door cabinets, along with free measuring, design, and consultation services, and cabinet delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas does Skiby Cabinets serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Skiby Cabinets serves Michigan and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "How long does cabinet delivery take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kitchen and bathroom cabinets are typically delivered in about 7–20 days after ordering, depending on the specific product line."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Skiby Cabinets offers free in-store or at-your-place consultations by appointment, as well as a free kitchen measure and design service."
        }
      },
      {
        "@type": "Question",
        "name": "Is Skiby Cabinets licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Skiby Cabinets is fully licensed and insured."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
