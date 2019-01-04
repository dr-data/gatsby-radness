export class NavItem {
  constructor(
    public text: string,
    public routePath?: string,
    public externalUrl?: string,
    public classes?: string
  ) {}
}