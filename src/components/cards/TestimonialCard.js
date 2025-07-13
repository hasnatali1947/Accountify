/* eslint-disable @next/next/no-img-element */
export function TestimonialCard(props) {
  return (
    <div className="group bg-white dark:bg-base-950 rounded-xl p-6">
      <div className="flex items-center gap-3">
        <img
          src={props.avatar}
          alt={props.name}
          className="size-9 rounded-full ring-3 ring-primary-300 border-burple-500 object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-lg sm:text-xl max-[400px]:text-base font-display text-title font-semibold sm:leading-none leading-none">
            {props.name}
          </h2>
          <span className="text-sm sm:text-base max-[400px]:text-xs sm:leading-none leading-none text-muted">
            {props.title}
          </span>
        </div>
      </div>
      <p className="text-base sm:text-lg max-[400px]:text-sm text-base-600 font-body mt-4">
        {props.testimonial}
      </p>
    </div>
  );
}
