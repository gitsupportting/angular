import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ai } from '../model/ai';
import { Body } from '../model/body';
import { ChangeLog } from '../model/changeLog';
import { ClientId } from '../model/clientId';
import { Comment } from '../model/comment';
import { CommentInput } from '../model/commentInput';
import { ExampleDiff } from '../model/exampleDiff';
import { Flag } from '../model/flag';
import { InlineResponse200 } from '../model/inlineResponse200';
import { ModeratorId } from '../model/moderatorId';
import { Rule } from '../model/rule';
import { RuleText } from '../model/ruleText';
import { Timestamp } from '../model/timestamp';
import { Topics } from '../model/topics';
import { UpdateTopic } from '../model/updateTopic';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class DefaultService {
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
     * Add a comment to this rule
     * Comments are ways to leave a note to say why a person made the decision they did.  Or it could be a question or answer trying to get help on an item.
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param text The text of the rule you want to work on
     * @param body
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addComment(language: string, text: string, body?: CommentInput, clientId?: number, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    addComment(language: string, text: string, body?: CommentInput, clientId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    addComment(language: string, text: string, body?: CommentInput, clientId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Delete an alternate sense for a rule
     * This will delete an alternate sense for rule and log the change
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param dependency This is the related text you want to work on.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteAlternateSense(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    deleteAlternateSense(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    deleteAlternateSense(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Delete an alternate spelling for a rule
     * This will delete an alternate spelling for rule and log the change
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param dependency This is the related text you want to work on.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteAlternateSpelling(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    deleteAlternateSpelling(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    deleteAlternateSpelling(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Delete a comment
     * Remove a comment
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param commentId The unique identifier for the comment
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteComment(text: string, language: string, commentId: string, clientId?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    deleteComment(text: string, language: string, commentId: string, clientId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    deleteComment(text: string, language: string, commentId: string, clientId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    /**
     * Delete an flag for a rule
     * This will delete a flag for rule and log the change
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param flag The name of the flag to change
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteFlag(text: string, language: string, flag: Flag, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    deleteFlag(text: string, language: string, flag: Flag, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    deleteFlag(text: string, language: string, flag: Flag, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Delete a leet mapping for a rule
     * This will delete a leet mapping for rule and log the change
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param dependency This is the related text you want to work on.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteLeetMapping(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    deleteLeetMapping(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    deleteLeetMapping(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Delete a rule
     * This will delete a rule and log the change
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteRule(text: string, language: string, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteRule(text: string, language: string, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteRule(text: string, language: string, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Delete a topic for a rule
     * This will delete a topic for rule and log the change
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param topicId The topic is the id for topic.  See documentation on Topic for what the ids are
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteTopic(text: string, language: string, topicId: number, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    deleteTopic(text: string, language: string, topicId: number, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    deleteTopic(text: string, language: string, topicId: number, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Get rules that match this prefix
     * Used for autocomplete so you can add alternate senses and fill out the rule
     * @param prefix The term you want to search for
     * @param clientIds Show results for a several given clients.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param languages Which languages does this apply to
     * @param limit Limit the number of results
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getAutocomplete(prefix: string, clientIds?: Array<ClientId>, languages?: Array<string>, limit?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<RuleText>>;
    getAutocomplete(prefix: string, clientIds?: Array<ClientId>, languages?: Array<string>, limit?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RuleText>>>;
    getAutocomplete(prefix: string, clientIds?: Array<ClientId>, languages?: Array<string>, limit?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RuleText>>>;
    /**
     * Get a comment
     * Get a comment by Id for this item
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param commentId The unique identifier for the comment
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getComment(text: string, language: string, commentId: string, clientId?: number, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    getComment(text: string, language: string, commentId: string, clientId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    getComment(text: string, language: string, commentId: string, clientId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Lookup a specific rule
     * This will get the specific rule in JSON format
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getRule(text: string, language: string, clientId?: number, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    getRule(text: string, language: string, clientId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    getRule(text: string, language: string, clientId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Get a list of all changes on this rule
     * This will get the full changelog of all changes made to a rule for all clients and languages you are authorized to view.
     * @param text The text of the rule you want to work on
     * @param languages Which languages does this apply to
     * @param clientIds Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to. You can set this to -1 to apply to all clients you have access to.
     * @param limit Limit the number of results
     * @param offset Start the search from offset 0.  For instance if your using pagination page 2 would be on totalItemsPerPage*pageNum.
     * @param refresh Should the database be refreshed to make sure all the rows are updated before calling.    Don&#x27;t do this in production as you will get latency spike and it may not even be turned on for production Used primarily for integration tests.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, limit?: number, offset?: number, refresh?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<ChangeLog>>;
    getRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, limit?: number, offset?: number, refresh?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ChangeLog>>>;
    getRuleHistory(text: string, languages?: Array<string>, clientIds?: Array<number>, limit?: number, offset?: number, refresh?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ChangeLog>>>;
    /**
     * Search for rules
     * Will get all the rules you have created in the system. For Enterprise Plus clients with a specific confidentiality agreement you may also have the option to review the Sift rules as well.
     * @param ai Show items the AI predicts as useful because moderators in the past have taken an action on this items.  Passing an array of objects as params can be tricky at first so here is an example &amp;ai[0][minPrediction]&#x3D;0.50&amp;ai[0][modelName]&#x3D;topic_vulgar&amp;ai[0][maxPrediction]&#x3D;0.95&amp;ai[1][minPrediction]&#x3D;0.10&amp;ai[1][modelName]&#x3D;topic_fraud&amp;ai[1][maxPrediction]&#x3D;0.80  In urlencoded form that would be &amp;ai%5B0%5D%5BminPrediction%5D&#x3D;0.50&amp;ai%5B0%5D%5BmodelName%5D&#x3D;topic_vulgar&amp;ai%5B0%5D%5BmaxPrediction%5D&#x3D;0.95&amp;ai%5B1%5D%5BminPrediction%5D&#x3D;0.10&amp;ai%5B1%5D%5BmodelName%5D&#x3D;topic_fraud&amp;ai%5B1%5D%5BmaxPrediction%5D&#x3D;0.80
     * @param doneByModeratorId Only show work done by this moderatorId
     * @param clientIds Show results for a several given clients.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param endDate Show results occurring before the given date in unixtimestamp (milliseconds since Epoch)
     * @param startDate Show results occurring after the given date in unixtimestamp (milliseconds since Epoch)
     * @param lastChangedStartDate Show results where there was a change between given date in unixtimestamp (milliseconds since Epoch)
     * @param lastChangedEndDate Show results where there was a change between given date in unixtimestamp (milliseconds since Epoch)
     * @param deleted Show deleted items
     * @param publishedStartDate Show results where there was a change between given date in unixtimestamp (milliseconds since Epoch)
     * @param publishedEndDate Show results where there was a change between given date in unixtimestamp (milliseconds since Epoch)
     * @param languages Which languages does this apply to
     * @param limit Limit the number of results
     * @param offset Start the search from offset 0.  For instance if your using pagination page 2 would be on totalItemsPerPage*pageNum.
     * @param altSense Has this word as an alternate sense
     * @param altSpelling Has this word as an alternate spelling
     * @param leetMapping Has this word as a leet mapping
     * @param taskId Is associated with a taskId for doing work
     * @param tags Only find items matching a certain tag
     * @param text Text search.  This uses fuzzy matching.
     * @param topics Only show items for these topics (topicId) between risk level minRisk and maxRisk
     * @param unresolvedComments Will see if there are any unresolved comments for you and show only those
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getRules(ai?: Array<Ai>, doneByModeratorId?: ModeratorId, clientIds?: Array<ClientId>, endDate?: number, startDate?: number, lastChangedStartDate?: Timestamp, lastChangedEndDate?: Timestamp, deleted?: boolean, publishedStartDate?: Timestamp, publishedEndDate?: Timestamp, languages?: Array<string>, limit?: number, offset?: number, altSense?: string, altSpelling?: string, leetMapping?: string, taskId?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<Rule>>;
    getRules(ai?: Array<Ai>, doneByModeratorId?: ModeratorId, clientIds?: Array<ClientId>, endDate?: number, startDate?: number, lastChangedStartDate?: Timestamp, lastChangedEndDate?: Timestamp, deleted?: boolean, publishedStartDate?: Timestamp, publishedEndDate?: Timestamp, languages?: Array<string>, limit?: number, offset?: number, altSense?: string, altSpelling?: string, leetMapping?: string, taskId?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Rule>>>;
    getRules(ai?: Array<Ai>, doneByModeratorId?: ModeratorId, clientIds?: Array<ClientId>, endDate?: number, startDate?: number, lastChangedStartDate?: Timestamp, lastChangedEndDate?: Timestamp, deleted?: boolean, publishedStartDate?: Timestamp, publishedEndDate?: Timestamp, languages?: Array<string>, limit?: number, offset?: number, altSense?: string, altSpelling?: string, leetMapping?: string, taskId?: string, tags?: Array<string>, text?: string, topics?: Array<Topics>, unresolvedComments?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Rule>>>;
    /**
     * List comments on this content item
     *
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    listComments(text: string, language: string, clientId?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Comment>>;
    listComments(text: string, language: string, clientId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Comment>>>;
    listComments(text: string, language: string, clientId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Comment>>>;
    /**
     * Mark a comment as resolved (or reopen)
     * Comments can be marked as needing to be answered.
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param text The text of the rule you want to work on
     * @param commentId The unique identifier for the comment
     * @param body
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    resolveComment(language: string, text: string, commentId: string, body?: Body, clientId?: number, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    resolveComment(language: string, text: string, commentId: string, body?: Body, clientId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    resolveComment(language: string, text: string, commentId: string, body?: Body, clientId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Test the impact if you where to upload a rule
     * This will add the rules temporarily in a sandbox environment look for examples of text that might be impacted and send it to the classifier. If the rules contains {{smart_rules}} then it will find all the words in those smart_rules and pull examples with them It will compare the old answer and the new answer and output a list of phrases that are different.  The clientIds param lets you choose which clients to get examples from.
     * @param body
     * @param examplesPerRule how many examples should we get per rule or smart_rule part
     * @param clientIds Show results for a several given clients.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    testRules(body?: Array<Rule>, examplesPerRule?: number, clientIds?: Array<ClientId>, observe?: 'body', reportProgress?: boolean): Observable<Array<ExampleDiff>>;
    testRules(body?: Array<Rule>, examplesPerRule?: number, clientIds?: Array<ClientId>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ExampleDiff>>>;
    testRules(body?: Array<Rule>, examplesPerRule?: number, clientIds?: Array<ClientId>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ExampleDiff>>>;
    /**
     * Update the current alternate sense (or add if does not exist) with this value.
     * This will update an alternate spelling for a rule and log the change  Alternate senses will replace this word with another word SOMETIMES.  You can have more than one alt sense and it will choose the best one based on context or the higher risk one if they are tied. Typically alternate senses are tied to smart rules like {{first_name}}
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param dependency This is the related text you want to work on.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateAlternateSense(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    updateAlternateSense(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    updateAlternateSense(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Update the current alternate spelling (or add if does not exist) with this value.
     * This will update an alternate spelling for a rule and log the change  Alternate spellings will replace this word with another word EVERY TIME.  You can have more than one alt spelling and it will choose the best one based on context or the higher risk one if they are tied.
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param dependency This is the related text you want to work on.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateAlternateSpelling(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    updateAlternateSpelling(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    updateAlternateSpelling(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Update a comment
     * Comments are ways to leave a note to say why a person made the decision they did.  Or it could be a question or answer trying to get help on an item.
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param text The text of the rule you want to work on
     * @param commentId The unique identifier for the comment
     * @param body
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateComment(language: string, text: string, commentId: string, body?: Comment, clientId?: number, observe?: 'body', reportProgress?: boolean): Observable<Comment>;
    updateComment(language: string, text: string, commentId: string, body?: Comment, clientId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Comment>>;
    updateComment(language: string, text: string, commentId: string, body?: Comment, clientId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Comment>>;
    /**
     * Update the a flag associated (or add if does not exist) with this value.
     * This will update a flag with this rule  These are a series of special attributes you can add to an item. For instance if you add FIRST_NAME flag it will automatically add an alt_sense of {{first_name}} and add other logic interally to treat it as potential PII
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param flag The name of the flag to change
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateFlag(text: string, language: string, flag: Flag, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    updateFlag(text: string, language: string, flag: Flag, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    updateFlag(text: string, language: string, flag: Flag, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Update the current leet mapping associated (or add if does not exist) with this value.
     * This will update a leet mapping with this rule  In many cases letters like ߎ or ⌰ could be used instead of u  You can map those other letters to u and the system will see if it results in a known word when doing so.
     * @param text The text of the rule you want to work on
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param dependency This is the related text you want to work on.
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateLeetMapping(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    updateLeetMapping(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    updateLeetMapping(text: string, language: string, dependency: RuleText, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Update the current rule
     * This will update the current rule to the following
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param text The text of the rule you want to work on
     * @param body
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateRule(language: string, text: string, body?: Rule, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    updateRule(language: string, text: string, body?: Rule, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    updateRule(language: string, text: string, body?: Rule, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    /**
     * Insert/Update rules in the system
     * This will update a rule and log the change
     * @param body
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateRules(body?: Array<Rule>, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    updateRules(body?: Array<Rule>, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    updateRules(body?: Array<Rule>, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    /**
     * Update the current topic (or add if does not exist) with this value.
     * This will update a topic for a rule and log the change
     * @param language Show results for the given language only.   This is the language used, could have been set by the user or detected by language id.
     * @param text The text of the rule you want to work on
     * @param topicId The topic is the id for topic.  See documentation on Topic for what the ids are
     * @param body
     * @param clientId Show results for a given client.  Typically this is set for you by the internal system based on the API_KEY you are using.  However some clients are allowed to view other clients such as when they have a sandbox or when they are a large enterprise and have multiple clients they manage.  It will only allow you to view client data you have access to.
     * @param publish This will also make the rule live
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateTopic(language: string, text: string, topicId: number, body?: UpdateTopic, clientId?: number, publish?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Rule>;
    updateTopic(language: string, text: string, topicId: number, body?: UpdateTopic, clientId?: number, publish?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rule>>;
    updateTopic(language: string, text: string, topicId: number, body?: UpdateTopic, clientId?: number, publish?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rule>>;
    static ɵfac: i0.ɵɵFactoryDef<DefaultService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<DefaultService>;
}
