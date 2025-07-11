interface CardProps {
  title: string;
  description: string;
  icon?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, icon, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon && (
          <span className="text-2xl mr-3">{icon}</span>
        )}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
} 