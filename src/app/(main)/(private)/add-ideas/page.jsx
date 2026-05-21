import AddIdeaForm from "@/components/main/AddIdeaForm";


export default function AddIdeasPage() {

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-2xl space-y-10">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Share your{' '}
                        <span className="text-(--primary)">Idea</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Share your knowledge with the world</p>
                </div>
                <AddIdeaForm />
              
            </div>
        </div>
    );
}