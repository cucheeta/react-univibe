interface CardData{
    title:string,
    subtitle:string,
    description:string,
    date:string,
    color:string
}

function Card({title, subtitle, description, date, color}:CardData){
    return (
    <>
        <div className="bg-white rounded-3xl p-6 w-80 m-3 shadow-sm flex flex-col gap-3">
            {/* Row título + fecha + círculo */}
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="titles text-xl font-semibold">{title}</h2>
                    <p className="texts text-gray-500 text-sm">{subtitle}</p>
                </div>

                {/* Círculo de color + fecha */}
                <div className="flex flex-col items-center">
                    <div
                        className="w-5 h-5 rounded-full"
                        style={{ backgroundColor: color }}
                ></div>
                <span className="titles text-xs text-gray-500 mt-1">{date}</span>
                </div>
            </div>

            {/* Descripción */}
            <p className="texts text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </>
  );
}
export default Card;