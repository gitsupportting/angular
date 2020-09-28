import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ai } from '../model/ai';
import { Body } from '../model/body';
import { Body1 } from '../model/body1';
import { Body2 } from '../model/body2';
import { Checkout } from '../model/checkout';
import { Comment } from '../model/comment';
import { CommentInput } from '../model/commentInput';
import { Decision } from '../model/decision';
import { ExampleInput } from '../model/exampleInput';
import { ExampleOutput } from '../model/exampleOutput';
import { InlineResponse200 } from '../model/inlineResponse200';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { InlineResponse201 } from '../model/inlineResponse201';
import { ModeratorId } from '../model/moderatorId';
import { Queue } from '../model/queue';
import { RuleAuditInput } from '../model/ruleAuditInput';
import { RuleAuditOutput } from '../model/ruleAuditOutput';
import { SpellingMistakeInput } from '../model/spellingMistakeInput';
import { SpellingMistakeOutput } from '../model/spellingMistakeOutput';
import { TaskInput } from '../model/taskInput';
import { TaskOutput } from '../model/taskOutput';
import { Topics } from '../model/topics';
import { UsernameInput } from '../model/usernameInput';
import { UsernameOutput } from '../model/usernameOutput';
import { Configuration } from '../configuration';
import { DefaultServiceInterface } from './default.serviceInterface';
import * as i0 from "@angular/core";
export declare class DefaultService implements DefaultServiceInterface {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * Add a comment to this content item
     * Comments are ways to leave a note to say why a person made the decision they did.  Or it could be a question or answer trying to get help on an item.
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addComment(queueId: string, contentId: string, body?: CommentInput, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    addComment(queueId: string, contentId: string, body?: CommentInput, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    addComment(queueId: string, contentId: string, body?: CommentInput, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Add examples of text to be reviewed
     * Add an example of short text for Quality Control.  This will later be used for  - Regression Tests | Once you mark an item as wrong and it is fixed you will want to be able to run it through the filter again to ensure the errors are not reproduced by creating future rules. - Examples | When reviewing things like spelling mistakes or rules it makes a huge difference to look at how words are really used.  For instance one might think that \&quot;made out\&quot; is sexual till they see the example \&quot;made out of plastic\&quot; - Training AI | We can improve the filter in the future by training AI to predict the risks and labels you provide and in so doing combine a rules based approach you can control with the fuzzy matching of AI to find similar things.
     * @param body
     * @param updateData If the item already exists should we update the values of the body element
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addExamples(body?: Array<ExampleInput>, updateData?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse201>;
    addExamples(body?: Array<ExampleInput>, updateData?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse201>>;
    addExamples(body?: Array<ExampleInput>, updateData?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse201>>;
    /**
     * Add rules to be audited
     * Our primary purpose is as a content filter.  To achieve this you can manually add word patterns to the system.  But how do you know if it is creating errors like false positives  To handle that we count how many times that rule is used in your new content and on key points like when it is said 100 times we bring it up here for review.  In this way you know you are working on the most impactful things first.  If the rule has already been added it will increase it&#x27;s priority.  Note that the request accepts an array of minimum 1 to maximum 100 items so you can do a bulk insert.
     * @param body
     * @param updateData If the item already exists should we update the values of the body element
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addRuleAuditItems(body?: Array<RuleAuditInput>, updateData?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse201>;
    addRuleAuditItems(body?: Array<RuleAuditInput>, updateData?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse201>>;
    addRuleAuditItems(body?: Array<RuleAuditInput>, updateData?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse201>>;
    /**
     * Add a common spelling mistake for review
     * One of the greatest impacts early on when you use the system is spelling mistakes, most often words unique to your product.  We automatically count which words are used and how often.  If it is frequently misspelled we will escalate it here.
     * @param body
     * @param updateData If the item already exists should we update the values of the body element
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addSpelling(body?: Array<SpellingMistakeInput>, updateData?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse201>;
    addSpelling(body?: Array<SpellingMistakeInput>, updateData?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse201>>;
    addSpelling(body?: Array<SpellingMistakeInput>, updateData?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse201>>;
    /**
     * Add a task for the team to do work on
     * You can create a task to work on.  For example split all the sexting words into sexual body parts and sexual activity.
     * @param body
     * @param updateData If the item already exists should we update the values of the body element
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addTaskItems(body?: Array<TaskInput>, updateData?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse201>;
    addTaskItems(body?: Array<TaskInput>, updateData?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse201>>;
    addTaskItems(body?: Array<TaskInput>, updateData?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse201>>;
    /**
     * Add usernames to be reviewed
     * Add an example of a username for Quality Control.  This will later be used for  - Regression Tests | Once you mark an item as wrong and it is fixed you will want to be able to run it through the filter again to ensure the errors are not reproduced by creating future rules. - Training AI | We can improve the filter in the future by training AI to predict the risks and labels you provide and in so doing combine a rules based approach you can control with the fuzzy matching of AI to find similar things.
     * @param body
     * @param updateData If the item already exists should we update the values of the body element
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addUseranmes(body?: Array<UsernameInput>, updateData?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse201>;
    addUseranmes(body?: Array<UsernameInput>, updateData?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse201>>;
    addUseranmes(body?: Array<UsernameInput>, updateData?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse201>>;
    /**
     * Delete all items in this queue
     * As this may take some time and this server may be scaled out we will setup a long running task to accomplish this and that will restart if doesn&#x27;t finish.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deletExampleItems(clientId?: number, languages?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deletExampleItems(clientId?: number, languages?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deletExampleItems(clientId?: number, languages?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Release all checkouts on a queue
     * Sometimes people go for coffee and still have items checked out.  When you get down to a few items left this can be a problem.  This will free up all non-expiring checkouts.
     * @param queueId The unique identifier for this queue
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteAllCheckouts(queueId: string, clientId?: number, languages?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    deleteAllCheckouts(queueId: string, clientId?: number, languages?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    deleteAllCheckouts(queueId: string, clientId?: number, languages?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    /**
     * Delete a comment
     * Remove a comment
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param commentId The unique identifier for the comment
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteComment(queueId: string, contentId: string, commentId: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    deleteComment(queueId: string, contentId: string, commentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    deleteComment(queueId: string, contentId: string, commentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    /**
     * Abandon a checkout
     * Remove a checkout assigned to you without doing any work.
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteItemCheckout(queueId: string, contentId: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    deleteItemCheckout(queueId: string, contentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    deleteItemCheckout(queueId: string, contentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    /**
     * Delete all items in this queue
     * As this may take some time and this server may be scaled out we will setup a long running task to accomplish this and that will restart if doesn&#x27;t finish.
     * @param queueId The unique identifier for this queue
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteItems(queueId: string, clientId?: number, languages?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    deleteItems(queueId: string, clientId?: number, languages?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    deleteItems(queueId: string, clientId?: number, languages?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    /**
     * Delete a param
     * Delete a param and use the default instead
     * @param queueId The unique identifier for this queue
     * @param paramId A custom configuration for a client
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteParam(queueId: string, paramId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteParam(queueId: string, paramId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteParam(queueId: string, paramId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Delete all items in this queue
     * As this may take some time and this server may be scaled out we will setup a long running task to accomplish this and that will restart if doesn&#x27;t finish.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteRuleAuditItems(clientId?: number, languages?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteRuleAuditItems(clientId?: number, languages?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteRuleAuditItems(clientId?: number, languages?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Delete all items in this queue
     * As this may take some time and this server may be scaled out we will setup a long running task to accomplish this and that will restart if doesn&#x27;t finish.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteSpellingItems(clientId?: number, languages?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteSpellingItems(clientId?: number, languages?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteSpellingItems(clientId?: number, languages?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Delete all items in this queue
     * As this may take some time and this server may be scaled out we will setup a long running task to accomplish this and that will restart if doesn&#x27;t finish.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteTaskItems(clientId?: number, languages?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteTaskItems(clientId?: number, languages?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteTaskItems(clientId?: number, languages?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Delete a users data
     * This will delete all data we have on a user. This is recommended for GDPR and CCPA compliance around terms like right to be forgetten.  Probably what you want instead however is to pseudonymize all the data with a put request instead.
     * @param userId The unique identifier for this user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteUser(userId: string, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    deleteUser(userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    deleteUser(userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     * Delete all items in this queue
     * As this may take some time and this server may be scaled out we will setup a long running task to accomplish this and that will restart if doesn&#x27;t finish.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteUsernameItems(clientId?: number, languages?: Array<string>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteUsernameItems(clientId?: number, languages?: Array<string>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteUsernameItems(clientId?: number, languages?: Array<string>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Get a comments
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getComments(queueId: string, contentId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Comment>>;
    getComments(queueId: string, contentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Comment>>>;
    getComments(queueId: string, contentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Comment>>>;
    /**
     * Get a comment
     * Get a comment by Id for this item
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param commentId The unique identifier for the comment
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getComment(queueId: string, contentId: string, commentId: string, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    getComment(queueId: string, contentId: string, commentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    getComment(queueId: string, contentId: string, commentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Search for or checkout items in this queue
     * Lookup items for this queue
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param ai Show items the AI predicts as useful because moderators in the past have taken an action on this items.  Passing an array of objects as params can be tricky at first so here is an example &amp;ai[0][minPrediction]&#x3D;0.50&amp;ai[0][modelName]&#x3D;topic_vulgar&amp;ai[0][maxPrediction]&#x3D;0.95&amp;ai[1][minPrediction]&#x3D;0.10&amp;ai[1][modelName]&#x3D;topic_fraud&amp;ai[1][maxPrediction]&#x3D;0.80  In urlencoded form that would be &amp;ai%5B0%5D%5BminPrediction%5D&#x3D;0.50&amp;ai%5B0%5D%5BmodelName%5D&#x3D;topic_vulgar&amp;ai%5B0%5D%5BmaxPrediction%5D&#x3D;0.95&amp;ai%5B1%5D%5BminPrediction%5D&#x3D;0.10&amp;ai%5B1%5D%5BmodelName%5D&#x3D;topic_fraud&amp;ai%5B1%5D%5BmaxPrediction%5D&#x3D;0.80
     * @param checkout Checkout this item for review
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param contentIds Get these specific contentIds.  Frequently used when you use the Previous button.
     * @param notContentIds Exclude these specific contentIds.  Originally designed so you can call checkout and pass in the item you are working on right now and it will give you a different one.  The default checkout behaviour will assign the items you already have checked out  (which is on your screen).
     * @param endDate Show results occurring before the given date in unixtimestamp (milliseconds since Epoch)
     * @param startDate Show results occurring after the given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedStartDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedEndDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param checkoutAvailable Only show items where the item could be checked out by me.  This is the same as checkout&#x3D;true but it does not check it out.
     * @param doneByModeratorId Only show work done by this moderatorId
     * @param limit Limit the number of results
     * @param offset Start the search from offset 0.  For instance if your using pagination page 2 would be on totalItemsPerPage*pageNum.
     * @param sortBy What do you want to sort the results by  - FIFO | First in First Out, the same order they came in - Recent | Handle the most recent items first - Priority | By priority (if applicable).  For quality control like spelling it is the times used so it will show the items misspelled 1000 times before the ones 500 times.  For reported users it will be the ones where multiple users have reported the same user. - AI | Deal with the higest AI predictions first that predict this should be relevant for me.  (NOTE: to search by AI you must also have set the ai.modelName in the first item of the parameter ai)
     * @param tags Only find items matching a certain tag
     * @param text Text search.  This uses fuzzy matching.
     * @param topics Only show items for these topics (topicId) between risk level minRisk and maxRisk
     * @param unresolvedComments Will see if there are any unresolved comments for you and show only those
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getExamples(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'body', reportProgress?: boolean): Observable<ExampleOutput>;
    getExamples(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExampleOutput>>;
    getExamples(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExampleOutput>>;
    /**
     * list all queues with pending and total counts
     * Will list all the queues that are available and the count of items in them
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getInbox(observe?: 'body', reportProgress?: boolean): Observable<Array<Queue>>;
    getInbox(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Queue>>>;
    getInbox(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Queue>>>;
    /**
     * Get the checkout for this item
     * Get the checkout for this item
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getItemCheckout(queueId: string, contentId: string, observe?: 'body', reportProgress?: boolean): Observable<Checkout>;
    getItemCheckout(queueId: string, contentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Checkout>>;
    getItemCheckout(queueId: string, contentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Checkout>>;
    /**
     * Get the queue
     * A Queue is a group of work to be done by moderators.  This will get the queue and it&#x27;s information
     * @param queueId The unique identifier for this queue
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getQueue(queueId: string, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    getQueue(queueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    getQueue(queueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     * Search for items in this queue
     * Lookup items for this queue
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param ai Show items the AI predicts as useful because moderators in the past have taken an action on this items.  Passing an array of objects as params can be tricky at first so here is an example &amp;ai[0][minPrediction]&#x3D;0.50&amp;ai[0][modelName]&#x3D;topic_vulgar&amp;ai[0][maxPrediction]&#x3D;0.95&amp;ai[1][minPrediction]&#x3D;0.10&amp;ai[1][modelName]&#x3D;topic_fraud&amp;ai[1][maxPrediction]&#x3D;0.80  In urlencoded form that would be &amp;ai%5B0%5D%5BminPrediction%5D&#x3D;0.50&amp;ai%5B0%5D%5BmodelName%5D&#x3D;topic_vulgar&amp;ai%5B0%5D%5BmaxPrediction%5D&#x3D;0.95&amp;ai%5B1%5D%5BminPrediction%5D&#x3D;0.10&amp;ai%5B1%5D%5BmodelName%5D&#x3D;topic_fraud&amp;ai%5B1%5D%5BmaxPrediction%5D&#x3D;0.80
     * @param checkout Checkout this item for review
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param contentIds Get these specific contentIds.  Frequently used when you use the Previous button.
     * @param notContentIds Exclude these specific contentIds.  Originally designed so you can call checkout and pass in the item you are working on right now and it will give you a different one.  The default checkout behaviour will assign the items you already have checked out  (which is on your screen).
     * @param endDate Show results occurring before the given date in unixtimestamp (milliseconds since Epoch)
     * @param startDate Show results occurring after the given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedStartDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedEndDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param checkoutAvailable Only show items where the item could be checked out by me.  This is the same as checkout&#x3D;true but it does not check it out.
     * @param doneByModeratorId Only show work done by this moderatorId
     * @param limit Limit the number of results
     * @param offset Start the search from offset 0.  For instance if your using pagination page 2 would be on totalItemsPerPage*pageNum.
     * @param sortBy What do you want to sort the results by  - FIFO | First in First Out, the same order they came in - Recent | Handle the most recent items first - Priority | By priority (if applicable).  For quality control like spelling it is the times used so it will show the items misspelled 1000 times before the ones 500 times.  For reported users it will be the ones where multiple users have reported the same user. - AI | Deal with the higest AI predictions first that predict this should be relevant for me.  (NOTE: to search by AI you must also have set the ai.modelName in the first item of the parameter ai)
     * @param tags Only find items matching a certain tag
     * @param text Text search.  This uses fuzzy matching.
     * @param topics Only show items for these topics (topicId) between risk level minRisk and maxRisk
     * @param unresolvedComments Will see if there are any unresolved comments for you and show only those
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getRuleAuditItems(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'body', reportProgress?: boolean): Observable<RuleAuditOutput>;
    getRuleAuditItems(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RuleAuditOutput>>;
    getRuleAuditItems(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RuleAuditOutput>>;
    /**
     * Search for or checkout items in this queue
     * Lookup items for this queue
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param ai Show items the AI predicts as useful because moderators in the past have taken an action on this items.  Passing an array of objects as params can be tricky at first so here is an example &amp;ai[0][minPrediction]&#x3D;0.50&amp;ai[0][modelName]&#x3D;topic_vulgar&amp;ai[0][maxPrediction]&#x3D;0.95&amp;ai[1][minPrediction]&#x3D;0.10&amp;ai[1][modelName]&#x3D;topic_fraud&amp;ai[1][maxPrediction]&#x3D;0.80  In urlencoded form that would be &amp;ai%5B0%5D%5BminPrediction%5D&#x3D;0.50&amp;ai%5B0%5D%5BmodelName%5D&#x3D;topic_vulgar&amp;ai%5B0%5D%5BmaxPrediction%5D&#x3D;0.95&amp;ai%5B1%5D%5BminPrediction%5D&#x3D;0.10&amp;ai%5B1%5D%5BmodelName%5D&#x3D;topic_fraud&amp;ai%5B1%5D%5BmaxPrediction%5D&#x3D;0.80
     * @param checkout Checkout this item for review
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param contentIds Get these specific contentIds.  Frequently used when you use the Previous button.
     * @param notContentIds Exclude these specific contentIds.  Originally designed so you can call checkout and pass in the item you are working on right now and it will give you a different one.  The default checkout behaviour will assign the items you already have checked out  (which is on your screen).
     * @param endDate Show results occurring before the given date in unixtimestamp (milliseconds since Epoch)
     * @param startDate Show results occurring after the given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedStartDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedEndDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param checkoutAvailable Only show items where the item could be checked out by me.  This is the same as checkout&#x3D;true but it does not check it out.
     * @param doneByModeratorId Only show work done by this moderatorId
     * @param limit Limit the number of results
     * @param offset Start the search from offset 0.  For instance if your using pagination page 2 would be on totalItemsPerPage*pageNum.
     * @param sortBy What do you want to sort the results by  - FIFO | First in First Out, the same order they came in - Recent | Handle the most recent items first - Priority | By priority (if applicable).  For quality control like spelling it is the times used so it will show the items misspelled 1000 times before the ones 500 times.  For reported users it will be the ones where multiple users have reported the same user. - AI | Deal with the higest AI predictions first that predict this should be relevant for me.  (NOTE: to search by AI you must also have set the ai.modelName in the first item of the parameter ai)
     * @param tags Only find items matching a certain tag
     * @param text Text search.  This uses fuzzy matching.
     * @param topics Only show items for these topics (topicId) between risk level minRisk and maxRisk
     * @param unresolvedComments Will see if there are any unresolved comments for you and show only those
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getSpelling(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'body', reportProgress?: boolean): Observable<SpellingMistakeOutput>;
    getSpelling(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SpellingMistakeOutput>>;
    getSpelling(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SpellingMistakeOutput>>;
    /**
     * Search for tasks in the queue
     * Lookup items for this queue
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param contentIds Get these specific contentIds.  Frequently used when you use the Previous button.
     * @param notContentIds Exclude these specific contentIds.  Originally designed so you can call checkout and pass in the item you are working on right now and it will give you a different one.  The default checkout behaviour will assign the items you already have checked out  (which is on your screen).
     * @param endDate Show results occurring before the given date in unixtimestamp (milliseconds since Epoch)
     * @param startDate Show results occurring after the given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedStartDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedEndDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param checkoutAvailable Only show items where the item could be checked out by me.  This is the same as checkout&#x3D;true but it does not check it out.
     * @param doneByModeratorId Only show work done by this moderatorId
     * @param assignedToModeratorId Show items assigned to this moderator
     * @param limit Limit the number of results
     * @param offset Start the search from offset 0.  For instance if your using pagination page 2 would be on totalItemsPerPage*pageNum.
     * @param sortBy What do you want to sort the results by  - FIFO | First in First Out, the same order they came in - Recent | Handle the most recent items first - Priority | By priority (if applicable).  For quality control like spelling it is the times used so it will show the items misspelled 1000 times before the ones 500 times.  For reported users it will be the ones where multiple users have reported the same user. - AI | Deal with the higest AI predictions first that predict this should be relevant for me.  (NOTE: to search by AI you must also have set the ai.modelName in the first item of the parameter ai)
     * @param tags Only find items matching a certain tag
     * @param text Text search.  This uses fuzzy matching.
     * @param unresolvedComments Will see if there are any unresolved comments for you and show only those
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getTaskItems(language: string, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, assignedToModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, unresolvedComments?: boolean, observe?: 'body', reportProgress?: boolean): Observable<TaskOutput>;
    getTaskItems(language: string, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, assignedToModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, unresolvedComments?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TaskOutput>>;
    getTaskItems(language: string, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, assignedToModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, unresolvedComments?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TaskOutput>>;
    /**
     * Get a users data
     * This will retrieve all information on a user.  This is recommended for GDPR around right to access.  It can also be used if you are downloading a report to send in to the police around criminal activity.
     * @param userId The unique identifier for this user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getUserData(userId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<any>>;
    getUserData(userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<any>>>;
    getUserData(userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<any>>>;
    /**
     * Search for or checkout items in this queue
     * Lookup items for this queue
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param ai Show items the AI predicts as useful because moderators in the past have taken an action on this items.  Passing an array of objects as params can be tricky at first so here is an example &amp;ai[0][minPrediction]&#x3D;0.50&amp;ai[0][modelName]&#x3D;topic_vulgar&amp;ai[0][maxPrediction]&#x3D;0.95&amp;ai[1][minPrediction]&#x3D;0.10&amp;ai[1][modelName]&#x3D;topic_fraud&amp;ai[1][maxPrediction]&#x3D;0.80  In urlencoded form that would be &amp;ai%5B0%5D%5BminPrediction%5D&#x3D;0.50&amp;ai%5B0%5D%5BmodelName%5D&#x3D;topic_vulgar&amp;ai%5B0%5D%5BmaxPrediction%5D&#x3D;0.95&amp;ai%5B1%5D%5BminPrediction%5D&#x3D;0.10&amp;ai%5B1%5D%5BmodelName%5D&#x3D;topic_fraud&amp;ai%5B1%5D%5BmaxPrediction%5D&#x3D;0.80
     * @param checkout Checkout this item for review
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param contentIds Get these specific contentIds.  Frequently used when you use the Previous button.
     * @param notContentIds Exclude these specific contentIds.  Originally designed so you can call checkout and pass in the item you are working on right now and it will give you a different one.  The default checkout behaviour will assign the items you already have checked out  (which is on your screen).
     * @param endDate Show results occurring before the given date in unixtimestamp (milliseconds since Epoch)
     * @param startDate Show results occurring after the given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedStartDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param reviewedEndDate Show results that where reviewed between given date in unixtimestamp (milliseconds since Epoch)
     * @param checkoutAvailable Only show items where the item could be checked out by me.  This is the same as checkout&#x3D;true but it does not check it out.
     * @param doneByModeratorId Only show work done by this moderatorId
     * @param limit Limit the number of results
     * @param offset Start the search from offset 0.  For instance if your using pagination page 2 would be on totalItemsPerPage*pageNum.
     * @param sortBy What do you want to sort the results by  - FIFO | First in First Out, the same order they came in - Recent | Handle the most recent items first - Priority | By priority (if applicable).  For quality control like spelling it is the times used so it will show the items misspelled 1000 times before the ones 500 times.  For reported users it will be the ones where multiple users have reported the same user. - AI | Deal with the higest AI predictions first that predict this should be relevant for me.  (NOTE: to search by AI you must also have set the ai.modelName in the first item of the parameter ai)
     * @param tags Only find items matching a certain tag
     * @param text Text search.  This uses fuzzy matching.
     * @param topics Only show items for these topics (topicId) between risk level minRisk and maxRisk
     * @param unresolvedComments Will see if there are any unresolved comments for you and show only those
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getUsernames(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'body', reportProgress?: boolean): Observable<UsernameOutput>;
    getUsernames(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsernameOutput>>;
    getUsernames(language: string, ai?: Array<Ai>, checkout?: boolean, clientIds?: Array<number>, contentIds?: Array<string>, notContentIds?: Array<string>, endDate?: number, startDate?: number, reviewedStartDate?: number, reviewedEndDate?: number, checkoutAvailable?: boolean, doneByModeratorId?: ModeratorId, limit?: number, offset?: number, sortBy?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsernameOutput>>;
    /**
     * Add your decision to this content item
     * This will   - Release your checkout on the item  - Record how long you spent on it (should be total items on screen / seconds since started minus any pauses)  - record what the current risk is when reviewed (if applicable)  - record what tags you set it as (including the decision you made where ban user, agree, disagree, delete content are all tags)
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    itemDone(queueId: string, contentId: string, body?: Decision, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse201>;
    itemDone(queueId: string, contentId: string, body?: Decision, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse201>>;
    itemDone(queueId: string, contentId: string, body?: Decision, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse201>>;
    /**
     * List comments on this content item
     *
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listCommentsForContentId(queueId: string, contentId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Comment>>;
    listCommentsForContentId(queueId: string, contentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Comment>>>;
    listCommentsForContentId(queueId: string, contentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Comment>>>;
    /**
     * Update the text of an item
     * Update the content.  Typically used for redacting.  It is limited in what you can do.
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    redactItem(queueId: string, contentId: string, body?: Body, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    redactItem(queueId: string, contentId: string, body?: Body, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    redactItem(queueId: string, contentId: string, body?: Body, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    /**
     * Redact a users data
     * This will redact and pseudonymize all data we have on a user. This is recommended for GDPR and CCPA compliance around terms like right to be forgetten.
     * @param userId The unique identifier for this user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    redactUser(userId: string, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    redactUser(userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    redactUser(userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     * Mark a comment as resolved (or reopen)
     * Comments can be marked as needing to be answered.
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param commentId The unique identifier for the comment
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    resolveComment(queueId: string, contentId: string, commentId: string, body?: Body1, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    resolveComment(queueId: string, contentId: string, commentId: string, body?: Body1, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    resolveComment(queueId: string, contentId: string, commentId: string, body?: Body1, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Update a comment
     * Comments are ways to leave a note to say why a person made the decision they did.  Or it could be a question or answer trying to get help on an item.
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param commentId The unique identifier for the comment
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateComment(queueId: string, contentId: string, commentId: string, body?: Comment, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    updateComment(queueId: string, contentId: string, commentId: string, body?: Comment, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    updateComment(queueId: string, contentId: string, commentId: string, body?: Comment, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Renew a checkout on an item
     * When you first get an item if checkout&#x3D;True you will have checked it out.  You should be showing a warning when the checkout is almost expired.  Calling this API will allow you to renew it.
     * @param queueId The unique identifier for this queue
     * @param contentId The unique identifier for the content
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateItemCheckout(queueId: string, contentId: string, body?: Checkout, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2001>;
    updateItemCheckout(queueId: string, contentId: string, body?: Checkout, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2001>>;
    updateItemCheckout(queueId: string, contentId: string, body?: Checkout, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2001>>;
    /**
     * Add a custom param
     * You can customize some fields.  To get all the params use GET /inbox/queue/{queueId}
     * @param queueId The unique identifier for this queue
     * @param paramId A custom configuration for a client
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateParam(queueId: string, paramId: string, body?: Body2, observe?: 'body', reportProgress?: boolean): Observable<any>;
    updateParam(queueId: string, paramId: string, body?: Body2, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    updateParam(queueId: string, paramId: string, body?: Body2, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<DefaultService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DefaultService>;
}
