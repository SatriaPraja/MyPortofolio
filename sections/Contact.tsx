    import { TranslationData } from '@/lib/languages';

    interface ContactProps {
    t: TranslationData['contact'];
    }

    export default function Contact({ t }: ContactProps) {
    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t.title} <span className="text-blue-500">{t.titleAccent}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{t.sub}</p>
            </div>
            <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nama" className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all shadow-sm" />
                <input type="email" placeholder="Email" className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all shadow-sm" />
            </div>
            <textarea rows={5} placeholder="Pesan" className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all shadow-sm"></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                {t.button}
            </button>
            </form>
        </div>
        </section>
    );
    }