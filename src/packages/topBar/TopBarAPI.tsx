import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';

export interface TopBarAPI {
    contributeComponent(fromShell: Shell, contribution: ContributedComponent1): void
}

export const TopBarAPI: SlotKey<TopBarAPI> = {
    name: 'Top Bar API',
    public: true,
};

export interface ContributedComponent1 {
    component: ReactComponentContributor;
}

export const componentsSlotKey: SlotKey<ContributedComponent1> = {
    name: 'contributedComponent1',
};

export const createTopBarAPI = (shell: Shell): TopBarAPI => {
    const componentsSlot = shell.declareSlot(componentsSlotKey)

    return {
        contributeComponent(fromShell, contribution) {
            componentsSlot.contribute(fromShell, contribution)
        }
    }
};