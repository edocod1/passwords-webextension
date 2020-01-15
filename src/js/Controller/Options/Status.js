import AbstractController from '@js/Controller/AbstractController';
import QueueService from '@js/Services/QueueService';
import SystemService from '@js/Services/SystemService';

export default class Status extends AbstractController {

    /**
     *
     * @param {Message} message
     * @param {Message} reply
     */
    async execute(message, reply) {
        let info   = await SystemService.getBrowserInfo(),
            status = {
                device: info.device
            };

        reply
            .setType('options.data')
            .setPayload(status);
    }

    /**
     *
     * @return {boolean}
     * @private
     */
    _isAuthorized() {
        return !QueueService.hasQueue('authorisation') || !QueueService.getFeedbackQueue('authorisation').hasItems();
    }
}