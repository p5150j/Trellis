interface BeforeAfterProps {
  before: string[];
  after: string[];
}

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-4">
      <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
        <h4 className="text-sm font-semibold text-red-800 uppercase tracking-wide mb-3 !mt-0">
          Before
        </h4>
        <ul className="space-y-2 !my-0 !list-none !pl-0">
          {before.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-red-900/80 !pl-0">
              <span className="text-red-400 mt-0.5 shrink-0">×</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 rounded-xl border border-green-200 bg-green-50/50">
        <h4 className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-3 !mt-0">
          After
        </h4>
        <ul className="space-y-2 !my-0 !list-none !pl-0">
          {after.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-green-900/80 !pl-0">
              <span className="text-green-500 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
