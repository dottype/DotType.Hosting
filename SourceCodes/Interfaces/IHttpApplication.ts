/**
 * Represents an application with an associated context
 */
export interface IHttpApplication<TContext>
{
    /**
     * Create a TContext given a collection of HTTP features.
     */
    CreateContext(): TContext;

    /**
     * Asynchronously processes an TContext.
     * @param context The TContext that the operation will process.
     */
    ProcessRequestAsync(context: TContext): Promise<void>;

    /**
     * Dispose a given TContext.
     * @param context The TContext to be disposed.
     */
    DisposeContext(context: TContext): void;
}