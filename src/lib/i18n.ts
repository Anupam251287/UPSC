import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "app_title_main": "SOCIOLOGY",
      "app_title_sub": "INTELLIGENCE",
      "app_engine": "UPSC Engine",
      "nav_intelligence_desk": "Intelligence Desk",
      "nav_syllabus_graph": "Syllabus Graph",
      "nav_thinker_engine": "Thinker Engine",
      "nav_ai_mentor": "AI Mentor",
      "nav_practice_zone": "Practice Zone",
      "nav_study_planner": "Study Planner",
      "nav_title": "Navigation",
      "thinker_map": "Thinker Map",
      "capitalism": "Capitalism",
      "religion": "Religion",
      "caste": "Caste",
      "pipeline": "Pipeline",
      "copyright": "© 2024 INTELLIGENCE ENGINE",
      "sys_arch": "System_Arch",
      "dashboard": {
        "engine_online": "Engine Online.",
        "engine_subtitle": "Consistency is the best sociology thinker. Strategy active.",
        "initiate_shift": "Initiate Shift",
        "retention_score": "Retention Score",
        "syllabus_map": "Syllabus Map",
        "avg_accuracy": "Avg. Accuracy",
        "revision_due": "Revision Due",
        "trajectory": "Preparation Trajectory",
        "analytics": "soc_analytics // performance_drift",
        "live_target": "Live Target",
        "resume": "Resume Operations",
        "revision_queue": "REVISION_QUEUE"
      },
      "mentor": {
        "title": "AI Sociologist",
        "placeholder": "Ask about any sociological concept or thinker...",
        "send": "Initialize Command",
        "loading": "Decoding..."
      },
      "practice": {
        "title": "Intelligence Quotient",
        "configure": "Configure Simulation",
        "topic_placeholder": "Topic, e.g., 'Modernity' or 'Gender'",
        "initiate": "Initiate AI Session",
        "report": "Intelligence Report",
        "accuracy": "Accuracy",
        "streak": "Streak",
        "question": "Question",
        "next": "Proceed to Next Vector",
        "analysis": "Analysis Logic"
      },
      "syllabus": {
        "search_placeholder": "Search concepts, thinkers...",
        "all_papers": "ALL",
        "paper": "PAPER",
        "impact": "IMPACT",
        "coverage": "Coverage",
        "core_concepts": "Core Concepts",
        "intellectual_agents": "Intellectual Agents",
        "ai_linker": "AI Linker Insights",
        "high": "High",
        "medium": "Medium",
        "low": "Low"
      },
      "thinkers": {
        "catalog": "Core Catalog",
        "school": "School of Thought",
        "quotes": "Deduce Quotes",
        "frameworks": "Analytical Frameworks",
        "magnum_opus": "Magnum Opus",
        "relational_logic": "Relational Logic"
      },
      "planner": {
        "title": "Operational Shift",
        "subtitle": "Tactical Study Plan: Phase 1 Foundations",
        "strategy": "Strategy Map",
        "efficiency": "Efficiency_Algorithm",
        "memory_strength": "Memory Strength",
        "revision_health": "Revision Health",
        "deadlines": "Upcoming_Deadlines",
        "sync_calendar": "Sync External Calendar",
        "memory_critical": "CRITICAL_LAG"
      }
    }
  },
  hi: {
    translation: {
      "app_title_main": "समाजशास्त्र",
      "app_title_sub": "इंटेलिजेंस",
      "app_engine": "यूपीएससी इंजन",
      "nav_intelligence_desk": "इंटेलिजेंस डेस्क",
      "nav_syllabus_graph": "पाठ्यक्रम ग्राफ",
      "nav_thinker_engine": "विचारक इंजन",
      "nav_ai_mentor": "एआई मेंटर",
      "nav_practice_zone": "अभ्यास क्षेत्र",
      "nav_study_planner": "अध्ययन योजनाकार",
      "nav_title": "नेविगेशन",
      "thinker_map": "विचारक मानचित्र",
      "capitalism": "पूंजीवाद",
      "religion": "धर्म",
      "caste": "जाति",
      "pipeline": "पाइपलाइन",
      "copyright": "© 2024 इंटेलिजेंस इंजन",
      "sys_arch": "सिस्टम संरचना",
      "dashboard": {
        "engine_online": "इंजन ऑनलाइन.",
        "engine_subtitle": "निरंतरता सबसे अच्छा समाजशास्त्र विचारक है। रणनीति सक्रिय।",
        "initiate_shift": "शिफ्ट शुरू करें",
        "retention_score": "प्रतिधारण स्कोर",
        "syllabus_map": "पाठ्यक्रम मानचित्र",
        "avg_accuracy": "औसत सटीकता",
        "revision_due": "संशोधन देय",
        "trajectory": "तैयारी का प्रक्षेपवक्र",
        "analytics": "समाजशास्त्र विश्लेषण // प्रदर्शन बहाव",
        "live_target": "लाइव लक्ष्य",
        "resume": "संचालन फिर से शुरू करें",
        "revision_queue": "संशोधन कतार"
      },
      "mentor": {
        "title": "एआई समाजशास्त्री",
        "placeholder": "किसी भी समाजशास्त्रीय अवधारणा या विचारक के बारे में पूछें...",
        "send": "कमांड शुरू करें",
        "loading": "डिकोडिंग..."
      },
      "practice": {
        "title": "बुद्धि भागफल",
        "configure": "सिमुलेशन कॉन्फ़िगर करें",
        "topic_placeholder": "विषय, जैसे, 'आधुनिकता' या 'लिंग'",
        "initiate": "एआई सत्र शुरू करें",
        "report": "इंटेलिजेंस रिपोर्ट",
        "accuracy": "सटीकता",
        "streak": "लगातार सही",
        "question": "प्रश्न",
        "next": "अगले वेक्टर पर आगे बढ़ें",
        "analysis": "विश्लेषण तर्क"
      },
      "syllabus": {
        "search_placeholder": "अवधारणाओं, विचारकों को खोजें...",
        "all_papers": "सभी",
        "paper": "पेपर",
        "impact": "प्रभाव",
        "coverage": "कवरेज",
        "core_concepts": "मूल अवधारणाएं",
        "intellectual_agents": "बौद्धिक एजेंट",
        "ai_linker": "एआई लिंकर अंतर्दृष्टि",
        "high": "उच्च",
        "medium": "मध्यम",
        "low": "निम्न"
      },
      "thinkers": {
        "catalog": "मूल कैटलॉग",
        "school": "विचार प्रणाली",
        "quotes": "उद्धरणों का अनुमान लगाएं",
        "frameworks": "विश्लेषणात्मक ढांचा",
        "magnum_opus": "मैग्नम ओपस",
        "relational_logic": "मकान तर्क"
      },
      "planner": {
        "title": "परिचालन बदलाव",
        "subtitle": "सामरिक अध्ययन योजना: चरण 1 नींव",
        "strategy": "रणनीति मानचित्र",
        "efficiency": "दक्षता एल्गोरिथ्म",
        "memory_strength": "स्मृति शक्ति",
        "revision_health": "संशोधन स्वास्थ्य",
        "deadlines": "आगामी समय सीमा",
        "sync_calendar": "बाहरी कैलेंडर सिंक करें",
        "memory_critical": "महत्वपूर्ण देरी"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
